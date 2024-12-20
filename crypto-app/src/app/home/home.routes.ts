import { Routes } from '@angular/router';
import { HomePage } from './home.page';
import { search } from 'ionicons/icons';

export const routes: Routes = [
    {
        path: 'home',
        component: HomePage,
        children: [
            {
                path: 'explore',
                loadComponent: () => import('../explore/explore.page').then(m => m.ExplorePage)
            },
            {
                path: 'watchlist',
                loadComponent: () => import('../watchlist/watchlist.page').then(m => m.WatchlistPage)
            },
            {
                path: 'settings',
                loadComponent: () => import('../settings/settings.page').then( m => m.SettingsPage)
              },
              {
              path:'search',
                loadComponent: () => import('../search/search.page').then(m => m.SearchPage)
            }   ,

        ],

    },
    {
        path: ' ',
        redirectTo: '/home/explore',
        pathMatch: 'full',
    },
];