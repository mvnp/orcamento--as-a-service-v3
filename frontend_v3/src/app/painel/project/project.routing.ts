import { Routes } from '@angular/router';

import { ProjectComponent } from './project.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { DashboardComponent } from 'src/app/example/dashboard/dashboard.component';

export const ProjectRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'project/index', component: ProjectComponent },
    { path: 'project/adicionar', component: AdicionarComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
]