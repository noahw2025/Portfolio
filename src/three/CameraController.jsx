import { useFrame, useThree } from '@react-three/fiber';
import { useMemo } from 'react';
import { Vector3 } from 'three';

const targets = {
  '/': { position: new Vector3(0.6, 1.4, 6.5), lookAt: new Vector3(0, 1.2, 0) },
  '/projects': { position: new Vector3(3.2, 1.5, 7.4), lookAt: new Vector3(0, 1.1, 0) },
  '/about': { position: new Vector3(-3, 1.6, 7.2), lookAt: new Vector3(0, 1.2, 0) },
  '/experience': { position: new Vector3(0, 2, 8.6), lookAt: new Vector3(0, 1.4, 0) },
  '/contact': { position: new Vector3(0.4, 1.3, 6.2), lookAt: new Vector3(0, 1.2, 0) },
};

const CameraController = ({ route }) => {
  const { camera } = useThree();

  const target = useMemo(() => targets[route] || targets['/'], [route]);

  useFrame(() => {
    camera.position.lerp(target.position, 0.045);
    camera.lookAt(target.lookAt);
  });

  return null;
};

export default CameraController;
