// resources/js/app.tsx
import '../css/app.css';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import AppLayout from '@/layouts/AppLayout';
import { ReactElement, ReactNode } from 'react';

// Define el tipo para el módulo de página
type PageModule = {
  default: {
    layout?: (page: ReactNode) => ReactElement;
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
    root.render(<App {...props} />);
  },
  progress: {
    color: '#f4d03f',
    showSpinner: true,
    includeCSS: true,
    delay: 100,

  },
});


// // resources/js/app.tsx
// import '../css/app.css';
// import { createInertiaApp } from '@inertiajs/react';
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// import { createRoot } from 'react-dom/client';
// import AppLayout from '@/layouts/AppLayout';
// import { ReactElement, ReactNode } from 'react';
// import { TooltipProvider } from '@radix-ui/react-tooltip'; // Importa el TooltipProvider

// // Define el tipo para el módulo de página
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
//     const page = resolvePageComponent(
//       `./pages/${name}.tsx`,
//       import.meta.glob<PageModule>('./pages/**/*.tsx')
//     );
    
//     page.then((module: PageModule) => {
//       module.default.layout = module.default.layout || 
//         ((page: ReactNode) => <AppLayout>{page}</AppLayout>);
//     });
    
//     return page;
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