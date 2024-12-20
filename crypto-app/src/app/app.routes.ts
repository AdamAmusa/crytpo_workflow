import { Routes } from '@angular/router';
import {AuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard'

  const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

export const routes: Routes = [

  {
    
    path: '',
    redirectTo: 'home/explore',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./home/home.routes').then((m) => m.routes),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  { path:'home',
    loadChildren: () => import('./home/home.page').then( m => m.HomePage),
  },
  {
    path: 'coinview',
    loadComponent: () => import('./coinview/coinview.page').then( m => m.CoinviewPage),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'search',
    loadComponent: () => import('./search/search.page').then( m => m.SearchPage)
  },
];
