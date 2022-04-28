import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { MdModule } from './../../example/md/md.module';
import { MaterialModule } from 'src/app/app.module';

import { MatTableExporterModule } from 'mat-table-exporter';

import { EstimateComponent } from './estimate.component';
import { EstimateProjectComponent } from './estimate-project/estimate-project.component';
import { EstimatePaymentsComponent } from './estimate-payments/estimate-payments.component';
import { EstimatePartnersComponent } from './estimate-partners/estimate-partners.component';
import { EstimateListComponent } from './estimate-list/estimate-list.component';

@NgModule({
    declarations: [
        EstimateComponent,
        EstimateProjectComponent,
        EstimatePaymentsComponent,
        EstimatePartnersComponent,
        EstimateListComponent
    ],
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        MaterialModule,
        MdModule,
        NgxMaskModule.forChild(),
        MatTableExporterModule
    ]
})
export class EstimateModule { }

