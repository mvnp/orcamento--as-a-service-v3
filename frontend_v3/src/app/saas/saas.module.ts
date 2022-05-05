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
import { BudgetsComponent } from './budgets/budgets.component';

@NgModule({
    declarations: [
        SaasComponent,
        BudgetsComponent
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
        ProjectsModule
    ]
})
export class SaasModule { }
