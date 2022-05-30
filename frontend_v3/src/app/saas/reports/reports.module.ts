import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from 'src/app/app.module';
import { MdModule } from './../../example/md/md.module';
import { MatTableExporterModule } from 'mat-table-exporter';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { MainPipeModule } from 'src/app/main-pipe/main-pipe.module';

import { ReportsComponent } from './reports.component';
import { ReportsObservationsComponent } from './reports-observations/reports-observations.component';
import { ReportsVerificationsComponent } from './reports-verifications/reports-verifications.component';
import { ReportsAddComponent } from './reports-add/reports-add.component';
import { ReportsEditComponent } from './reports-edit/reports-edit.component';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
    align: "right",
    allowNegative: false,
    decimal: ",",
    precision: 2,
    prefix: "", // prefix: "R$ "
    suffix: "",
    thousands: "."
};

@NgModule({
    declarations: [
        ReportsComponent,
        ReportsObservationsComponent,
        ReportsVerificationsComponent,
        ReportsAddComponent,
        ReportsEditComponent,
    ],
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        MaterialModule,
        MdModule,
        NgxMaskModule.forChild(),
        MatTableExporterModule,
        CurrencyMaskModule,
        MainPipeModule
    ],
    providers: [
        {
            provide: CURRENCY_MASK_CONFIG,
            useValue: CustomCurrencyMaskConfig
        }
    ]
})
export class ReportsModule { }