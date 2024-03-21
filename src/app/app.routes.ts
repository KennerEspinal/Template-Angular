import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/pages.routes')
      },
      {
        path: '**',
        loadComponent: () => import('./pages/page-not-found/page-not-found.component')
      },
];
