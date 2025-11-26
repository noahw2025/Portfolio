import { useMemo } from 'react';
import { Points, PointMaterial } from '@react-three/drei';

const ParticlesField = ({ count = 300, radius = 10 }) => {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * Math.cbrt(Math.random());
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      arr[i * 3] = x;
      arr[i * 3 + 1] = y * 0.4;
      arr[i * 3 + 2] = z * 0.4;
    }
    return arr;
  }, [count, radius]);

  return (
    <group position={[0, 1.2, -1]}>
      <Points positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#22d3ee"
          size={0.06}
          sizeAttenuation
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
};

export default ParticlesField;
