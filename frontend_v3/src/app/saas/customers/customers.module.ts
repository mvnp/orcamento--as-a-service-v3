import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/app.module';
import { MdModule } from './../../example/md/md.module';
import { NgxMaskModule } from 'ngx-mask';

import { CustomersComponent } from './customers.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { MatTableExporterModule } from 'mat-table-exporter';

@NgModule({
    declarations: [
        CustomersComponent,
        ListCustomersComponent
    ],
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        MaterialModule,
        MdModule,
        MatTableExporterModule,
        NgxMaskModule.forChild(),
    ]
})
export class CustomersModule { }

