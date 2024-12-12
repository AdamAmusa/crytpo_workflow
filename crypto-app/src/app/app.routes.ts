import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/explore',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./home/home.routes').then((m) => m.routes),
  },
  {
    path: 'coinview',
    loadComponent: () => import('./coinview/coinview.page').then( m => m.CoinviewPage)
  },
];
