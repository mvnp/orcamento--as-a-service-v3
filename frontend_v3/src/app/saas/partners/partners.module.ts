import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { MdModule } from './../../example/md/md.module';
import { MaterialModule } from 'src/app/app.module';
import { MatTableExporterModule } from 'mat-table-exporter';

import { PartnersComponent } from './partners.component';
import { ListPartnersComponent } from './list-partners/list-partners.component';

@NgModule({
    declarations: [
        PartnersComponent,
        ListPartnersComponent,
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
export class PartnersModule { }

