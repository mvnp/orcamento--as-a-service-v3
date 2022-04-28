import { Routes } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { CustomersComponent } from './customers/customers.component';
import { PartnersComponent } from './partners/partners.component';
import { ContractsComponent } from './contracts/contracts.component';

import { EstimateComponent } from './estimate/estimate.component';

export const SaasRoutes: Routes = [
    { path: 'projects', component: ProjectsComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'partners', component: PartnersComponent },
    { path: 'estimate', component: EstimateComponent },
    { path: 'contracts', component: ContractsComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
]
