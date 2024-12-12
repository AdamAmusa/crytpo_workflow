import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'crypto-graph',
    loadComponent: () => import('./components/crypto-graph/crypto-graph.component').then((m) => m.CryptoGraphComponent),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.routes').then((m) => m.routes),
  },
];
