import React, { useRef, useMemo, forwardRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

// 5 Brand Colors from Logo
const COLORS = [
  new THREE.Color('#56A8FD'), // Blue
  new THREE.Color('#A16AFE'), // Purple
  new THREE.Color('#D142F5'), // Pink-Purple
  new THREE.Color('#F46EBE'), // Pink
  new THREE.Color('#F9B2BC'), // Light Pink
];

const CustomParticleMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector3(0, 0, 0),
    uRadius: 1,      // Base repulsion radius
    uShatterForce: 1, // How violently they spread
  },
  // Vertex Shader
  `
    uniform float uTime;
    uniform vec3 uMouse;
    uniform float uRadius;
    uniform float uShatterForce;
    attribute float aRandom;
    attribute vec3 aColor;      
    varying vec3 vColor;
    varying float vAlpha;

    // Simplex noise function for natural drift
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 = v - i + dot(i, C.xxx) ;
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );
      vec3 x1 = x0 - i1 +  C.xxx;
      vec3 x2 = x0 - i2 +  C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute( permute( permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
      float n_ = 1.0/7.0;
      vec3  ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z.z.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
    }

    void main() {
      vColor = aColor;

      // Base position is the incoming vertex position
      vec3 pos = position;

      // 1. Natural Drift (Noise)
      float noiseFreq = 0.5;
      float noiseAmp = 0.3;
      vec3 noisePos = vec3(
        snoise(pos * noiseFreq + uTime * 0.2),
        snoise(pos * noiseFreq + uTime * 0.2 + 100.0),
        snoise(pos * noiseFreq + uTime * 0.2 + 200.0)
      );
      pos += noisePos * noiseAmp;

      // 2. Mouse Shatter/Repulsion Effect
      // Calculate distance from mouse in 3D space
      float distToMouse = distance(pos, uMouse);
      
      // We want a sharp, strong effect nearby that fades quickly
      // uRadius controls how far the mouse effect reaches
      float influence = 1.0 - smoothstep(0.0, uRadius, distToMouse);
      
      if (influence > 0.0) {
        // Direction away from mouse
        vec3 dir = normalize(pos - uMouse);
        
        // Add some random scatter direction to make it look like a "shatter" 
        // rather than a perfect sphere pushing away
        vec3 scatterDir = normalize(dir + noisePos * 1.5);
        
        // Apply force based on influence (closer = stronger) and global shatter force
        // We square the influence to make it highly concentrated near the mouse
        float force = influence * influence * uShatterForce;
        
        pos += scatterDir * force;
      }

      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      
      // Increased base particle size here (from 15.0 to 25.0 base scale)
      // Size pulses slightly with time and random offset
      float pointSize = (25.0 * aRandom + 10.0) + sin(uTime * 2.0 + aRandom * 10.0) * 3.0;
      
      gl_PointSize = pointSize * (1.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
      
      // Calculate alpha based on distance from camera for depth fading
      vAlpha = smoothstep(15.0, 2.0, -mvPosition.z);
    }
  `,
  // Fragment Shader
  `
    varying vec3 vColor;
    varying float vAlpha;
    void main() {
      // Create soft circular particles
      vec2 xy = gl_PointCoord.xy - vec2(0.5);
      float ll = length(xy);
      if (ll > 0.5) discard;
      
      // Very soft radial gradient for the particle itself
      float alpha = smoothstep(0.5, 0.1, ll);
      
      // Global opacity capped at ~0.55 for soft look, combined with depth fade
      float finalAlpha = alpha * 0.55 * vAlpha;
      
      gl_FragColor = vec4(vColor, finalAlpha);
    }
  `
);

extend({ CustomParticleMaterial });

const Particles = forwardRef<THREE.Group, { radius: number; shatterForce: number; mouseRadius: number }>(({ radius, shatterForce, mouseRadius }, ref) => {
  const { viewport } = useThree();
  const count = 3000; // Total particles
  
  // Only calculate the SPHERE positions once. No morph targets.
  const { positions, colors, aRandom } = useMemo(() => {
    const p = new Float32Array(count * 3);
    const c = new Float32Array(count * 3);
    const r = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      // Sphere distribution
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      // Distribute particles randomly *within* the sphere volume, not just on surface
      // Math.cbrt pushes more particles towards the outer edge for a denser look
      const r_volume = radius * Math.cbrt(Math.random()); 
      
      const x = r_volume * Math.sin(phi) * Math.cos(theta);
      const y = r_volume * Math.sin(phi) * Math.sin(theta);
      const z = r_volume * Math.cos(phi);
      
      p[i * 3] = x;
      p[i * 3 + 1] = y;
      p[i * 3 + 2] = z;

      // Assign random brand color
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      c[i * 3] = color.r;
      c[i * 3 + 1] = color.g;
      c[i * 3 + 2] = color.b;

      r[i] = Math.random();
    }
    return { positions: p, colors: c, aRandom: r };
  }, [count, radius]);

  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial & { uTime: number; uRadius: number; uShatterForce: number; uMouse: THREE.Vector3 }>(null);

  useFrame((state) => {
    if (!pointsRef.current || !materialRef.current) return;

    const t = state.clock.getElapsedTime();
    
    // Slow, elegant globe rotation
    pointsRef.current.rotation.y = t * 0.05;
    pointsRef.current.rotation.x = t * 0.02;

    materialRef.current.uTime = t;
    materialRef.current.uRadius = mouseRadius;
    materialRef.current.uShatterForce = shatterForce;

    // Convert mouse NDC (-1 to +1) to World Space coordinates
    // We assume the object is at z=0 
    const mouseX = (state.mouse.x * viewport.width) / 2;
    const mouseY = (state.mouse.y * viewport.height) / 2;
    
    // Smoothly interpolate the shader's mouse position towards actual mouse position
    materialRef.current.uMouse.lerp(new THREE.Vector3(mouseX, mouseY, 0), 0.1);
  });

  return (
    <group ref={ref}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-aColor" count={count} array={colors} itemSize={3} />
          <bufferAttribute attach="attributes-aRandom" count={count} array={aRandom} itemSize={1} />
        </bufferGeometry>
        {/* @ts-expect-error - Custom R3F element */}
        <customParticleMaterial ref={materialRef} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
    </group>
  );
});

interface ParticleBagProps {
  radius?: number;
  shatterForce?: number;
  mouseRadius?: number;
}

const ParticleBag: React.FC<ParticleBagProps> = ({ 
  // Increased base sphere radius to cover more screen naturally
  radius = 4.0, 
  // How violently the particles are pushed away
  shatterForce = 3.5, 
  // The area of influence of the mouse
  mouseRadius = 2.5 
}) => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 45 }}
        eventSource={typeof document !== 'undefined' ? document.getElementById('app-root') || undefined : undefined}
      >
        <Particles radius={radius} shatterForce={shatterForce} mouseRadius={mouseRadius} />
      </Canvas>
    </div>
  );
};

export default ParticleBag;
