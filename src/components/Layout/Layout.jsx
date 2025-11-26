import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

const SceneRoot = lazy(() => import('../../three/SceneRoot'));

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen text-text" style={{ background: 'var(--gradient-background)' }}>
      <CustomCursor />
      <div className="pointer-events-none fixed inset-0 -z-10">
        <Suspense fallback={<div className="h-full w-full bg-[color:var(--color-background)]" />}>          
          <Canvas
            camera={{ position: [0, 1.4, 7], fov: 42 }}
            gl={{ antialias: true, powerPreference: 'high-performance' }}
            className="h-full w-full"
          >
            <SceneRoot activeRoute={location.pathname} />
          </Canvas>
        </Suspense>
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <NavBar />
        <main className="flex-1 px-5 md:px-8">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
