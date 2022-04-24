import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { MdModule } from '../example/md/md.module';
import { NgxMaskModule } from 'ngx-mask';
import { RouterModule } from '@angular/router';
import { MatTableExporterModule } from 'mat-table-exporter';

import { SaasRoutes } from './saas.routing';

import { SaasComponent } from './saas.component';

import { ProjectsComponent } from './projects/projects.component';
import { ListProjectsComponent } from './projects/list-projects/list-projects.component';
import { LandingPageComponent } from './projects/landing-page/landing-page.component';
import { ManagerProjectsComponent } from './projects/manager-projects/manager-projects.component';

import { CustomersComponent } from './customers/customers.component';
import { ListCustomersComponent } from './customers/list-customers/list-customers.component';

import { PartnersComponent } from './partners/partners.component';
import { ListPartnersComponent } from './partners/list-partners/list-partners.component';

import { EstimateComponent } from './estimate/estimate.component';
import { EstimateProjectComponent } from './estimate/estimate-project/estimate-project.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        MaterialModule,
        MdModule,
        NgxMaskModule.forChild(),
        RouterModule.forChild(SaasRoutes),
        MatTableExporterModule
    ],
    declarations: [
        SaasComponent, 
        ProjectsComponent,
        ListProjectsComponent,
        LandingPageComponent,
        ManagerProjectsComponent,
        CustomersComponent,
        ListCustomersComponent,
        PartnersComponent,
        ListPartnersComponent,
        EstimateComponent,
        EstimateProjectComponent
    ]
})
export class SaasModule { }
