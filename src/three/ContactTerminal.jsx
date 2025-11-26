import { Float } from '@react-three/drei';

const ContactTerminal = () => (
  <group position={[3.1, 0.6, -0.8]}>
    <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.45}>
      <mesh position={[0, 0.7, 0]}>
        <boxGeometry args={[1.2, 0.4, 1.2]} />
        <meshStandardMaterial color="#22d3ee" metalness={0.4} roughness={0.35} />
      </mesh>
      <mesh position={[0, 1.05, 0]}>
        <octahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={0.18} />
      </mesh>
    </Float>
  </group>
);

export default ContactTerminal;
