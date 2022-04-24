import { Routes, RouterModule } from '@angular/router';

import { BudgetComponent } from './budget.component';
import { DashboardComponent } from 'src/app/example/dashboard/dashboard.component';

export const BudgetRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'budget', component: BudgetComponent },
    { path: 'budget/:id', component: BudgetComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];