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

import { ContractsModule } from './contracts/contracts.module';
import { EstimateModule } from './estimate/estimate.module';
import { CustomersModule } from './customers/customers.module';
import { PartnersModule } from './partners/partners.module';
import { ProjectsModule } from './projects/projects.module';
import { BudgetsModule } from './budgets/budgets.module';
import { ReportsComponent } from './reports/reports.component';
import { ReportsModule } from './reports/reports.module';

@NgModule({
    declarations: [
        SaasComponent,
    ],
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        MaterialModule,
        MdModule,
        NgxMaskModule.forChild(),
        RouterModule.forChild(SaasRoutes),
        MatTableExporterModule,
        EstimateModule,
        ContractsModule,
        CustomersModule,
        PartnersModule,
        ProjectsModule,
        BudgetsModule,
        ReportsModule,
    ]
})
export class SaasModule { }
