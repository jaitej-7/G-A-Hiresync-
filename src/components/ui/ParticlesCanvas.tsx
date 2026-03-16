import React, { useEffect, useRef } from 'react';

interface Particle {
  theta: number;
  phi: number;
  radius: number;
  size: number;
  color: string;
  offsetX: number;
  offsetY: number;
  offsetZ: number;
  vx: number;
  vy: number;
  vz: number;
}

const COLORS = [
  '#FF1493', '#00BFFF', '#FFD700', '#32CD32',
  '#FF4500', '#9400D3', '#00FA9A', '#FF00FF',
  '#00FFFF', '#FF6347', '#7B68EE'
];

interface ParticlesCanvasProps {
  className?: string;
}

export const ParticlesCanvas: React.FC<ParticlesCanvasProps> = ({
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const requestRef = useRef<number>();
  const rotRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const baseRadius = Math.min(window.innerWidth, window.innerHeight) * 0.7;
      particlesRef.current.forEach(p => p.radius = baseRadius);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => { 
      mouseRef.current.x = e.clientX; 
      mouseRef.current.y = e.clientY; 
    });
    window.addEventListener('mouseout', () => { 
      mouseRef.current.x = -1000; 
      mouseRef.current.y = -1000; 
    });

    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? 800 : 1500;
    const baseRadius = Math.min(window.innerWidth, window.innerHeight) * 0.42;

    particlesRef.current = Array.from({ length: particleCount }, () => ({
      theta: Math.random() * Math.PI * 2,
      phi: Math.acos((Math.random() * 2) - 1),
      radius: baseRadius,
      size: Math.random() * 1.8 + 0.6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      offsetX: 0,
      offsetY: 0,
      offsetZ: 0,
      vx: 0,
      vy: 0,
      vz: 0
    }));

    resize();

    const animate = () => {
      const ctx = canvas.getContext('2d', { alpha: true });
      if (!ctx) return;

      requestRef.current = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      rotRef.current.y += 0.003;
      rotRef.current.x += 0.001;

      const { x: rotX, y: rotY } = rotRef.current;
      const { width, height } = canvas;
      const fov = 600;
      const cameraZ = 600;
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      const mouseRadius = 120;

      const particles = particlesRef.current;
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);

      // Pre-calculate projection and physics for all particles
      // Using a temporary flat array for sorting to avoid excessive object creation
      const drawList = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Base rotated position
        const tx = p.radius * Math.sin(p.phi) * Math.cos(p.theta);
        const ty = p.radius * Math.sin(p.phi) * Math.sin(p.theta);
        const tz = p.radius * Math.cos(p.phi);

        // Y rotation
        const rx = tx * cosY - tz * sinY;
        const rz = tx * sinY + tz * cosY;

        // X rotation
        const ry = ty * cosX - rz * sinX;
        const rz2 = ty * sinX + rz * cosX;

        // Current actual world position
        const wx = rx + p.offsetX;
        const wy = ry + p.offsetY;
        const wz = rz2 + p.offsetZ;

        // Project to screen
        const perspective = fov / (fov + wz + cameraZ);
        const sx = width / 2 + wx * perspective;
        const sy = height / 2 + wy * perspective;

        // Mouse repulsion
        const dx = sx - mouseX;
        const dy = sy - mouseY;
        
        if (Math.abs(dx) < mouseRadius && Math.abs(dy) < mouseRadius) {
          const distSq = dx * dx + dy * dy;
          if (distSq < mouseRadius * mouseRadius) {
            const dist = Math.sqrt(distSq);
            const force = (mouseRadius - dist) / mouseRadius;
            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * force * 5;
            p.vy += Math.sin(angle) * force * 5;
            p.vz += (Math.random() - 0.5) * force * 7;
          }
        }

        // Physics
        p.vx += (0 - p.offsetX) * 0.05;
        p.vy += (0 - p.offsetY) * 0.05;
        p.vz += (0 - p.offsetZ) * 0.05;
        p.vx *= 0.85;
        p.vy *= 0.85;
        p.vz *= 0.85;
        p.offsetX += p.vx;
        p.offsetY += p.vy;
        p.offsetZ += p.vz;

        const alpha = Math.max(0.05, Math.min(0.6, (1 - (rz2 / p.radius) * 0.5) * 0.5));
        
        drawList.push({
          sx,
          sy,
          z: wz + cameraZ,
          alpha,
          color: p.color,
          size: Math.max(0.2, p.size * perspective)
        });
      }

      // Depth sort
      drawList.sort((a, b) => b.z - a.z);

      // Final Render
      for (let i = 0; i < drawList.length; i++) {
        const p = drawList[i];
        if (p.z > 0) {
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          // Use square dots for performance if very small, circle for larger ones
          if (p.size < 1.5) {
            ctx.fillRect(p.sx - p.size, p.sy - p.size, p.size * 2, p.size * 2);
          } else {
            ctx.beginPath();
            ctx.arc(p.sx, p.sy, p.size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticlesCanvas;
