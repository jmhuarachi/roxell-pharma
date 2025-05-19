import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { ReactNode } from 'react';

// Definición de tipos para los breadcrumbs si los necesitas
type BreadcrumbItem = {
    title: string;
    href: string;
};

interface DashboardLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function DashboardLayout({ children, breadcrumbs = [] }: DashboardLayoutProps) {
    const { url } = usePage();
    
    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>Roxell-Pharma</title>
            </Head>
            
            <Navbar enlaceActivo={url} />
            
            <main className="flex-grow p-4">
                {/* Aquí puedes agregar los breadcrumbs si los necesitas */}
                {breadcrumbs.length > 0 && (
                    <div className="mb-4">
                        {/* Renderizar breadcrumbs */}
                    </div>
                )}
                
                {children}
            </main>
            <Footer />
        </div>
    );
}