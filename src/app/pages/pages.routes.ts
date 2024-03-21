import { Routes } from "@angular/router";

export default [
    {
        path: '',
        loadComponent: () => import('./main.component'),
        children: [
            { 
                path: '', 
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./dashboard/dashboard.component')
            },
            {
                path: 'products',
                loadComponent: () => import('./products/products.component')
            }
        ],
    },
] as Routes;