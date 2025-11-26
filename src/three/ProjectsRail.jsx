import { Float } from '@react-three/drei';
import { useMemo } from 'react';

const ProjectsRail = () => {
  const cards = useMemo(
    () => [
      { x: -3, color: '#22d3ee', tilt: 0.18 },
      { x: -1, color: '#ffd500', tilt: 0.12 },
      { x: 1, color: '#7c3aed', tilt: -0.08 },
      { x: 3, color: '#ff6db0', tilt: 0.2 },
    ],
    [],
  );

  return (
    <group position={[0, 0.7, -2]}>
      {cards.map((card, idx) => (
        <Float key={idx} speed={1.2} rotationIntensity={0.18} floatIntensity={0.35}>
          <mesh position={[card.x, 0.5, -idx * 0.55]} rotation={[0, card.tilt, 0]}>
            <boxGeometry args={[0.9, 1.2, 0.08]} />
            <meshStandardMaterial
              color={card.color}
              emissive={card.color}
              emissiveIntensity={0.16}
              roughness={0.28}
              metalness={0.25}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

export default ProjectsRail;
