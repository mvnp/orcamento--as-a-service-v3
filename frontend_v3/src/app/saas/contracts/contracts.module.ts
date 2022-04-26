import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { MdModule } from 'src/app/example/md/md.module';
import { MaterialModule } from 'src/app/app.module';

import { ContractsComponent } from './contracts.component';
import { MyContractsComponent } from './my-contracts/my-contracts.component';
import { SampleContractsComponent } from './sample-contracts/sample-contracts.component';
import { MySampleContractsComponent } from './my-sample-contracts/my-sample-contracts.component';

@NgModule({
    declarations: [
        ContractsComponent,
        MyContractsComponent,
        SampleContractsComponent,
        MySampleContractsComponent
    ],
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        MaterialModule,
        MdModule,
        NgxMaskModule.forChild(),
    ]
})
export class ContractsModule { }
