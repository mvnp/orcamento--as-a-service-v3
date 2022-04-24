import { Routes } from '@angular/router';

import { DashboardComponent } from 'src/app/example/dashboard/dashboard.component';
import { CronogramaComponent } from './cronograma.component';
import { ListComponent } from './list/list.component';

export const CronogramaRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'cronograma', component: ListComponent },
    { path: 'cronograma/:id', component: CronogramaComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
]