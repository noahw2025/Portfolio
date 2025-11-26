import { Float } from '@react-three/drei';

const AboutCorner = () => (
  <group position={[-3.2, 0.6, -1.2]}>
    <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh position={[0, 0.7, 0]}>
        <boxGeometry args={[1.4, 1, 0.2]} />
        <meshStandardMaterial color="#ff6db0" emissive="#ff6db0" emissiveIntensity={0.15} />
      </mesh>
    </Float>
    <mesh position={[0.4, 0.4, 0.35]}>
      <boxGeometry args={[0.25, 0.25, 0.25]} />
      <meshStandardMaterial color="#ffd500" />
    </mesh>
    <mesh position={[-0.4, 0.3, 0.35]}>
      <cylinderGeometry args={[0.12, 0.12, 0.3, 24]} />
      <meshStandardMaterial color="#22d3ee" />
    </mesh>
  </group>
);

export default AboutCorner;
