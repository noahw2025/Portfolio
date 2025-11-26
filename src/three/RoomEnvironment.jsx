const RoomEnvironment = () => (
  <group>
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[40, 40]} />
      <meshStandardMaterial color="#0d1322" roughness={0.8} />
    </mesh>
    <mesh position={[0, 4, -8]}>
      <boxGeometry args={[20, 8, 0.5]} />
      <meshStandardMaterial color="#0f172a" />
    </mesh>
    <mesh position={[0, 1.6, -3]}>
      <ringGeometry args={[5.5, 6, 64]} />
      <meshBasicMaterial color="#22d3ee" transparent opacity={0.12} />
    </mesh>
    <mesh position={[0, 0.01, -2]}>
      <torusGeometry args={[4.5, 0.04, 32, 64]} />
      <meshBasicMaterial color="#7c3aed" transparent opacity={0.12} />
    </mesh>
  </group>
);

export default RoomEnvironment;
