import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="min-h-screen bg-background text-slate-100">
    <div className="pointer-events-none fixed inset-0 bg-grid-glow opacity-80" aria-hidden="true" />
    <Navbar />
    <main className="relative z-10">{children}</main>
    <Footer />
  </div>
);

export default Layout;
