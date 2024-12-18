import { Routes } from '@angular/router';
import { HomePage } from './home.page';

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

        ],

    },
    {
        path: ' ',
        redirectTo: '/home/explore',
        pathMatch: 'full',
    },
];