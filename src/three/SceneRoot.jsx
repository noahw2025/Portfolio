import { Suspense } from 'react';
import { Environment, ContactShadows } from '@react-three/drei';
import CameraController from './CameraController';
import HeroConsole from './HeroConsole';
import RoomEnvironment from './RoomEnvironment';
import ProjectsRail from './ProjectsRail';
import AboutCorner from './AboutCorner';
import ContactTerminal from './ContactTerminal';
import ParticlesField from './ParticlesField';

const SceneRoot = ({ activeRoute }) => (
  <>
    <color attach="background" args={[0x080b14]} />
    <ambientLight intensity={0.4} />
    <spotLight position={[4, 8, 6]} angle={0.45} intensity={0.8} penumbra={0.4} color={0xffffff} />
    <spotLight position={[-4, 7, 4]} angle={0.35} intensity={0.6} penumbra={0.3} color={0x7c3aed} />
    <pointLight position={[0, 2.5, 2]} intensity={1.1} color={0x22d3ee} distance={15} />

    <Suspense fallback={null}>
      <ParticlesField />
      <HeroConsole />
      <ProjectsRail />
      <AboutCorner />
      <ContactTerminal />
      <RoomEnvironment />
      <Environment preset="city" />
      <ContactShadows position={[0, 0, 0]} opacity={0.35} scale={20} blur={2.5} far={6} />
    </Suspense>

    <CameraController route={activeRoute} />
  </>
);

export default SceneRoot;
