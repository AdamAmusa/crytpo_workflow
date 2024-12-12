import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.routes').then((m) => m.routes),
  },
  {
    path: 'coinview',
    loadComponent: () => import('./coinview/coinview.page').then( m => m.CoinviewPage)
  },
  {
    path: '',
    loadComponent: () => import('./explore/explore.page').then( m => m.ExplorePage)
      
    },
];
