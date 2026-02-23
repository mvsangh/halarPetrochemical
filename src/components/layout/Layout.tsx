import { ReactNode } from 'react';
import ModernNavbar from './ModernNavbar';
import Footer from './Footer';
import WhatsAppButton from '../common/WhatsAppButton';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ModernNavbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
