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
      const baseRadius = Math.min(window.innerWidth, window.innerHeight) * 0.35;
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

    const particleCount = window.innerWidth > 768 ? 600 : 300;
    const baseRadius = Math.min(window.innerWidth, window.innerHeight) * 0.35;

    particlesRef.current = Array.from({ length: particleCount }, () => ({
      theta: Math.random() * Math.PI * 2,
      phi: Math.acos((Math.random() * 2) - 1),
      radius: baseRadius,
      size: Math.random() * 1.4 + 0.4,
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
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      requestRef.current = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      rotRef.current.y += 0.003;
      rotRef.current.x += 0.001;

      const { x: rotX, y: rotY } = rotRef.current;
      const width = canvas.width;
      const height = canvas.height;
      const fov = 600, cameraZ = 600;

      // Update and Depth Sort
      const points = particlesRef.current.map(p => {
        // Base rotated position
        const tx = p.radius * Math.sin(p.phi) * Math.cos(p.theta);
        const ty = p.radius * Math.sin(p.phi) * Math.sin(p.theta);
        const tz = p.radius * Math.cos(p.phi);

        // Y rotation
        const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
        const rx = tx * cosY - tz * sinY;
        const rz = tx * sinY + tz * cosY;

        // X rotation
        const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
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
        let dx = sx - mouseRef.current.x;
        let dy = sy - mouseRef.current.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        const mouseRadius = 120;

        if (dist < mouseRadius) {
          let force = (mouseRadius - dist) / mouseRadius;
          let angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force * 5;
          p.vy += Math.sin(angle) * force * 5;
          p.vz += (Math.random() - 0.5) * force * 7;
        }

        // Spring back
        p.vx += (0 - p.offsetX) * 0.05;
        p.vy += (0 - p.offsetY) * 0.05;
        p.vz += (0 - p.offsetZ) * 0.05;

        // Friction
        p.vx *= 0.88;
        p.vy *= 0.88;
        p.vz *= 0.88;

        p.offsetX += p.vx;
        p.offsetY += p.vy;
        p.offsetZ += p.vz;

        // For drawing and sorting
        const zPos = wz + cameraZ;
        const alpha = Math.max(0.05, Math.min(0.6, (1 - (rz2 / p.radius) * 0.5) * 0.5));

        return {
          sx: width / 2 + (rx + p.offsetX) * (fov / (rz2 + p.offsetZ + cameraZ)),
          sy: height / 2 + (ry + p.offsetY) * (fov / (rz2 + p.offsetZ + cameraZ)),
          zDepth: zPos,
          alpha,
          color: p.color,
          size: p.size * (fov / zPos)
        };
      });

      points.sort((a, b) => b.zDepth - a.zDepth);

      points.forEach(p => {
        if (p.zDepth > 0) {
          ctx.beginPath();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.arc(p.sx, p.sy, Math.max(0.1, p.size), 0, Math.PI * 2);
          ctx.fill();
        }
      });
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
