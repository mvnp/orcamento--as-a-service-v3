import { Routes } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { CustomersComponent } from './customers/customers.component';
import { PartnersComponent } from './partners/partners.component';
import { EstimateComponent } from './estimate/estimate.component';
import { ContractsComponent } from './contracts/contracts.component';

export const SaasRoutes: Routes = [
    { path: 'projects', component: ProjectsComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'partners', component: PartnersComponent },
    { path: 'estimate/:id', component: EstimateComponent },
    { path: 'contracts', component: ContractsComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
]
