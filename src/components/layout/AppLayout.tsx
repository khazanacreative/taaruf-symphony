
import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Header from './Header';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {children}
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
