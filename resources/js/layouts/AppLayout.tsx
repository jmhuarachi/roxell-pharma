import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { Head } from '@inertiajs/react';
import { ReactNode } from 'react';
import  Chatbot  from '@/components/Chatbot/Chatbot';

interface AppLayoutProps {
  children: ReactNode;
  title?: string;
}

export default function AppLayout({ children, title = 'RP' }: AppLayoutProps) {
  return (
    <>
    
    <div className="min-h-screen flex flex-col bg-white">
      <Head title={title}>
        <meta name="description" content="Laboratorios farmacéuticos innovadores" />
        <link rel="icon" href="/logo1.png"  />
      </Head>
      
      <Navbar />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
      <Chatbot/>
      
      
    </div>
    
    </>
  );
}