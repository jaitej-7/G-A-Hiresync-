import React, { useRef, useMemo, forwardRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

// 5 Brand Colors from Logo
const COLORS = [
  new THREE.Color('#56A8FD'), // Brand Blue
  new THREE.Color('#A16AFE'), // Brand Purple
  new THREE.Color('#D142F5'), // Brand Pink/Purple
  new THREE.Color('#F46EBE'), // Brand Pink
  new THREE.Color('#F9B2BC'), // Brand Peach
];

const CustomParticleMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector3(0, 0, 0),
    uRadius: 1.5,
    uShatterForce: 1.0,
    uMorph: 0,
    uAlpha: 1.0,
  },
  // Vertex Shader
  `
    uniform float uTime;
    uniform vec3 uMouse;
    uniform float uRadius;
    uniform float uShatterForce;
    uniform float uMorph;
    
    attribute vec3 position2; // Helix
    attribute vec3 position3; // Torus
    attribute float aRandom;
    attribute vec3 aColor;
    
    varying vec3 vColor;
    varying float vAlpha;

    // Helper functions for noise and randomness
    float hash(float n) { return fract(sin(n) * 43758.5453123); }
    
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
      vec4 j = p - 49.0 * floor(p * ns.z);
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
      
      // Morphing positions
      vec3 targetPos;
      if (uMorph <= 1.0) {
        targetPos = mix(position, position2, uMorph);
      } else {
        targetPos = mix(position2, position3, uMorph - 1.0);
      }

      // Add gentle noise-based drift
      float driftStrength = 0.2 * (1.0 - smoothstep(0.0, 0.5, uMorph) * 0.5);
      vec3 drift = vec3(
        snoise(targetPos * 0.5 + uTime * 0.2 + aRandom),
        snoise(targetPos * 0.5 + uTime * 0.25 + aRandom * 1.3),
        snoise(targetPos * 0.5 + uTime * 0.15 + aRandom * 1.7)
      ) * driftStrength * (1.0 + aRandom);
      
      vec3 finalPos = targetPos + drift;

      // Mouse Interaction (in local space for simplicity or world space)
      // We will treat uMouse as being in the same space as finalPos
      float dist = distance(finalPos.xy, uMouse.xy);
      if (dist < uRadius) {
        float force = (1.0 - dist / uRadius) * uShatterForce;
        finalPos.xy += normalize(finalPos.xy - uMouse.xy) * force;
      }

      vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);
      
      // Point size based on depth and random variation
      gl_PointSize = (3.0 + aRandom * 4.0) * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
      
      // Depth-based transparency + random shimmer
      vAlpha = smoothstep(12.0, 2.0, -mvPosition.z) * (0.6 + 0.4 * sin(uTime + aRandom * 10.0));
    }
  `,
  // Fragment Shader
  `
    uniform float uAlpha;
    varying vec3 vColor;
    varying float vAlpha;
    void main() {
      float d = distance(gl_PointCoord, vec2(0.5));
      if (d > 0.5) discard;
      float strength = smoothstep(0.5, 0.1, d);
      gl_FragColor = vec4(vColor, strength * vAlpha * uAlpha);
    }
  `
);

extend({ CustomParticleMaterial });

const Particles = forwardRef<THREE.Group, { radius: number; shatterForce: number; mouseRadius: number }>(({ radius, shatterForce, mouseRadius }, ref) => {
  const { viewport } = useThree();
  const count = 3000;

  const { positions, positions2, positions3, colors, aRandom } = useMemo(() => {
    const p1 = new Float32Array(count * 3); // Sphere
    const p2 = new Float32Array(count * 3); // Helix
    const p3 = new Float32Array(count * 3); // Torus
    const c = new Float32Array(count * 3);
    const r = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // 1. Sphere
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r_sphere = radius * (0.9 + Math.random() * 0.1);

      p1[i * 3] = r_sphere * Math.sin(phi) * Math.cos(theta);
      p1[i * 3 + 1] = r_sphere * Math.sin(phi) * Math.sin(theta);
      p1[i * 3 + 2] = r_sphere * Math.cos(phi);

      // 2. Helix
      const h_theta = (i / count) * Math.PI * 16;
      const h_radius = radius * 0.7;
      const h_height = ((i / count) - 0.5) * radius * 4;

      p2[i * 3] = h_radius * Math.cos(h_theta);
      p2[i * 3 + 1] = h_height;
      p2[i * 3 + 2] = h_radius * Math.sin(h_theta);

      // 3. Torus
      const t_theta = Math.random() * 2 * Math.PI;
      const t_phi = Math.random() * 2 * Math.PI;
      const t_R = radius * 1.0;
      const t_r = radius * 0.4;

      p3[i * 3] = (t_R + t_r * Math.cos(t_phi)) * Math.cos(t_theta);
      p3[i * 3 + 1] = (t_R + t_r * Math.cos(t_phi)) * Math.sin(t_theta);
      p3[i * 3 + 2] = t_r * Math.sin(t_phi);

      // Colors
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      c[i * 3] = color.r;
      c[i * 3 + 1] = color.g;
      c[i * 3 + 2] = color.b;

      r[i] = Math.random();
    }
    return { positions: p1, positions2: p2, positions3: p3, colors: c, aRandom: r };
  }, [count, radius]);

  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (!pointsRef.current || !materialRef.current) return;

    const t = state.clock.getElapsedTime();

    // Auto-rotation
    pointsRef.current.rotation.y = t * 0.1;
    pointsRef.current.rotation.x = t * 0.05;

    materialRef.current.uTime = t;
    materialRef.current.uRadius = mouseRadius;
    materialRef.current.uShatterForce = shatterForce;

    // Scroll-based morphing
    const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    const targetMorph = Math.min(2.0, scrollY / 1200); // Morph faster
    materialRef.current.uMorph = THREE.MathUtils.lerp(materialRef.current.uMorph, targetMorph, 0.05);

    // Mouse Interaction
    const mouseX = (state.mouse.x * viewport.width) / 2;
    const mouseY = (state.mouse.y * viewport.height) / 2;
    materialRef.current.uMouse.lerp(new THREE.Vector3(mouseX, mouseY, 0), 0.1);
  });

  return (
    <group ref={ref}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-position2" count={count} array={positions2} itemSize={3} />
          <bufferAttribute attach="attributes-position3" count={count} array={positions3} itemSize={3} />
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
  radius = 4.0,
  shatterForce = 2.0,
  mouseRadius = 2.5
}) => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Particles radius={radius} shatterForce={shatterForce} mouseRadius={mouseRadius} />
      </Canvas>
    </div>
  );
};

export default ParticleBag;
