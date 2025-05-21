import '../css/app.css';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import AppLayout from '@/layouts/AppLayout';
import AdminLayout from '@/admin/layouts/AdminLayout';
import { ReactElement, ReactNode } from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';

type PageModule = {
  default: {
    layout?: (page: ReactNode) => ReactElement;
    title?: string;
    description?: string;
  };
};

const appName = import.meta.env.VITE_APP_NAME || '';

createInertiaApp({
  title: (title) => {
    if (title && appName) {
      return `${title} | ${appName}`;
    }
    return title || appName || '';
  },
  resolve: (name) => {
    // Para páginas de admin
    if (name.startsWith('Admin/')) {
      const page = resolvePageComponent(
        `./admin/pages/${name.replace('Admin/', '')}.tsx`,
        import.meta.glob<PageModule>('./admin/pages/**/*.tsx')
      );
      
      page.then((module: PageModule) => {
        const { title = 'Admin Panel', description } = module.default;
        module.default.layout = module.default.layout || 
          ((page: ReactNode) => (
            <AdminLayout title={title} description={description}>
              {page}
            </AdminLayout>
          ));
      });
      
      return page;
    }

    // Para páginas normales
    const page = resolvePageComponent(
      `./pages/${name}.tsx`,
      import.meta.glob<PageModule>('./pages/**/*.tsx')
    );
    
    page.then((module: PageModule) => {
      module.default.layout = module.default.layout || 
        ((page: ReactNode) => <AppLayout>{page}</AppLayout>);
    });
    
    return page;
  },
  setup({ el, App, props }) {
    const root = createRoot(el);
    
    root.render(
      <TooltipProvider>
        <App {...props} />
      </TooltipProvider>
    );
  },
  progress: {
    color: '#f4d03f',
    showSpinner: true,
    includeCSS: true,
    delay: 100,
  },
});


// import '../css/app.css';
// import { createInertiaApp } from '@inertiajs/react';
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// import { createRoot } from 'react-dom/client';
// import AppLayout from '@/layouts/AppLayout';
// import AdminLayout from '@/admin/layouts/AdminLayout';
// import { ReactElement, ReactNode } from 'react';
// import { TooltipProvider } from '@radix-ui/react-tooltip';

// type PageModule = {
//   default: {
//     layout?: (page: ReactNode) => ReactElement;
//   };
// };

// const appName = import.meta.env.VITE_APP_NAME || '';

// createInertiaApp({
//   title: (title) => {
//     if (title && appName) {
//       return `${title} | ${appName}`;
//     }
//     return title || appName || '';
//   },
//   resolve: (name) => {
//     // Ruta para páginas de admin
//     if (name.startsWith('Admin/')) {
//       return resolvePageComponent(
//         `./admin/pages/${name.replace('Admin/', '')}.tsx`,
//         import.meta.glob<PageModule>('./admin/pages/**/*.tsx')
//       );
//     }

//     // Ruta para páginas normales
//     return resolvePageComponent(
//       `./pages/${name}.tsx`,
//       import.meta.glob<PageModule>('./pages/**/*.tsx')
//     );
//   },
//   setup({ el, App, props }) {
//     const root = createRoot(el);
    
//     root.render(
//       <TooltipProvider>
//         <App {...props} />
//       </TooltipProvider>
//     );
//   },
//   progress: {
//     color: '#f4d03f',
//     showSpinner: true,
//     includeCSS: true,
//     delay: 100,
//   },
// });