import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Text, RoundedBox, Torus, Html, Cylinder, Ring } from '@react-three/drei';
import { Color, Vector3 } from 'three';

const HeroConsole = () => {
  const group = useRef();
  const screen = useRef();
  const togglePad = useRef();
  const holo = useRef();
  const { pointer } = useThree();
  const [active, setActive] = useState(false);
  const targetGlow = useRef(0.3);
  const hoverGlow = useRef(0.3);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y = pointer.x * 0.2 + Math.sin(t * 0.4) * 0.05;
    group.current.rotation.x = pointer.y * 0.12 + Math.sin(t * 0.5) * 0.02;

    if (screen.current?.material) {
      const mat = screen.current.material;
      mat.emissiveIntensity = mat.emissiveIntensity + (targetGlow.current - mat.emissiveIntensity) * 0.08;
      mat.color.lerp(new Color(active ? '#7c3aed' : '#22d3ee'), 0.08);
      mat.emissive.lerp(new Color(active ? '#ff6db0' : '#22d3ee'), 0.08);
    }
    if (togglePad.current?.material) {
      const mat = togglePad.current.material;
      mat.emissiveIntensity = mat.emissiveIntensity + (hoverGlow.current - mat.emissiveIntensity) * 0.1;
    }
    if (holo.current) {
      holo.current.rotation.y = t * 0.8;
      holo.current.position.y = 1.05 + Math.sin(t * 1.2) * 0.05;
    }
  });

  return (
    <group ref={group} position={[0, 0.8, 0]}>
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.7}>
        <RoundedBox args={[2.6, 0.6, 1.6]} radius={0.12} smoothness={6} position={[0, 0.4, 0]}>
          <meshStandardMaterial color="#0f172a" metalness={0.35} roughness={0.4} />
        </RoundedBox>
        <mesh
          ref={screen}
          position={[0, 0.8, 0]}
          onPointerEnter={() => {
            targetGlow.current = 0.9;
          }}
          onPointerLeave={() => {
            targetGlow.current = 0.4;
          }}
          onClick={() => setActive((p) => !p)}
        >
          <boxGeometry args={[1.5, 0.55, 0.1]} />
          <MeshDistortMaterial color="#22d3ee" speed={3.6} distort={0.18} roughness={0.08} emissive="#22d3ee" emissiveIntensity={0.35} />
        </mesh>
        <mesh ref={togglePad} position={[-0.85, 0.6, 0.45]}>
          <cylinderGeometry args={[0.12, 0.12, 0.12, 24]} />
          <meshStandardMaterial color="#ffd500" emissive="#ffd500" emissiveIntensity={0.3} />
        </mesh>
        <mesh
          position={[0.85, 0.6, 0.45]}
          onPointerEnter={() => (hoverGlow.current = 0.7)}
          onPointerLeave={() => (hoverGlow.current = 0.3)}
          onClick={() => setActive((p) => !p)}
        >
          <Torus args={[0.12, 0.05, 32, 64]}>
            <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={0.25} />
          </Torus>
        </mesh>
        <group ref={holo} position={[0, 1.05, 0]}>
          <Ring args={[0.3, 0.5, 64]}>
            <meshBasicMaterial color="#22d3ee" transparent opacity={0.25} />
          </Ring>
          <Cylinder args={[0.05, 0.05, 0.15, 32]} position={[0, 0.1, 0]}>
            <meshStandardMaterial color="#ff6db0" emissive="#ff6db0" emissiveIntensity={0.8} />
          </Cylinder>
        </group>
      </Float>
      <Text position={[0, 1.4, 0]} fontSize={0.22} color="white" anchorX="center" anchorY="middle">
        Creative Console
      </Text>
      <Html position={[0, 1.62, 0]} center>
        <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80">Move & click to pulse</div>
      </Html>
    </group>
  );
};

export default HeroConsole;
