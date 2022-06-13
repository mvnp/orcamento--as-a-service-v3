import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './example/layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './example/layouts/auth/auth-layout.component';
import { DashboardComponent } from './example/dashboard/dashboard.component';

import { AuthGuard } from './_helpers/auth.guard';
import { AuthService } from './_helpers/auth.service';

import { LoginComponent } from './login/login.component';
import { LockComponent } from './example/pages/lock/lock.component';
import { RegisterComponent } from './example/pages/register/register.component';
import { PricingComponent } from './example/pages/pricing/pricing.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: 'auth/login',
        component: LoginComponent
    }, {
        path: '',
        canActivate:[AuthGuard],
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./example/dashboard/dashboard.module').then(m => m.DashboardModule)
            }, {
                path: 'components',
                loadChildren: () => import('./example/components/components.module').then(m => m.ComponentsModule)
            }, {
                path: 'forms',
                loadChildren: () => import('./example/forms/forms.module').then(m => m.Forms)
            }, {
                path: 'tables',
                loadChildren: () => import('./example/tables/tables.module').then(m => m.TablesModule)
            }, {
                path: 'maps',
                loadChildren: () => import('./example/maps/maps.module').then(m => m.MapsModule)
            }, {
                path: 'widgets',
                loadChildren: () => import('./example/widgets/widgets.module').then(m => m.WidgetsModule)
            }, {
                path: 'charts',
                loadChildren: () => import('./example/charts/charts.module').then(m => m.ChartsModule)
            }, {
                path: 'calendar',
                loadChildren: () => import('./example/calendar/calendar.module').then(m => m.CalendarModule)
            }, {
                path: 'timeline',
                loadChildren: () => import('./example/timeline/timeline.module').then(m => m.TimelineModule)
            }, {
                path: 'user',
                loadChildren: () => import('./example/userpage/user.module').then(m => m.UserModule)
            }, {
                path: 'saas',
                loadChildren: () => import('./saas/saas.module').then(m => m.SaasModule)
            }
        ]
    }, {
        path: 'lock',
        component: LockComponent
    }, {
        path: 'register',
        component: RegisterComponent
    }, {
        path: 'pricing',
        component: PricingComponent
    }, {
        /***
         * Para qualquer URL que tentar acessar e não existir,
         * será redirecionado para esta página de login afim de
         * solicitar as credenciais para entrar no sistema.
         */
        path: '**',
        component: LoginComponent
    }
];
