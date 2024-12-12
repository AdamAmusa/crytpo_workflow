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
        ]

    }
];