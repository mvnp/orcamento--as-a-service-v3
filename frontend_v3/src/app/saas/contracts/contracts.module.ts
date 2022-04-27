import { MatTabGroup } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { MdModule } from 'src/app/example/md/md.module';
import { MaterialModule } from 'src/app/app.module';
import { MatTableExporterModule } from 'mat-table-exporter';

import { ContractsComponent } from './contracts.component';
import { MyContractsComponent } from './my-contracts/my-contracts.component';
import { SampleContractsComponent } from './sample-contracts/sample-contracts.component';
import { MySampleContractsComponent } from './my-sample-contracts/my-sample-contracts.component';
import { CreateMyModelComponent } from './create-my-model/create-my-model.component';

@NgModule({
    declarations: [
        ContractsComponent,
        MyContractsComponent,
        SampleContractsComponent,
        MySampleContractsComponent,
        CreateMyModelComponent
    ],
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        MaterialModule,
        MdModule,
        NgxMaskModule.forChild(),
        MatTableExporterModule
    ],
    providers: [
        MatTabGroup
    ]
})
export class ContractsModule { }
