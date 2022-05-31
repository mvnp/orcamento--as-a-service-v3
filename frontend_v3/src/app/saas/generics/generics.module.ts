import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../app.module';
import { MdModule } from '../../example/md/md.module';
import { NgxMaskModule } from 'ngx-mask';
import { MatTableExporterModule } from 'mat-table-exporter';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';

import { MainPipeModule } from '../../main-pipe/main-pipe.module';

import { GenericsComponent } from './generics.component';
import { GenericsListComponent } from './generics-list/generics-list.component';
import { GenericsAddComponent } from './generics-add/generics-add.component';
import { GenericsEditComponent } from './generics-edit/generics-edit.component';

import { GenericsRoutes } from './generics.routing';

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
        GenericsComponent,
        GenericsListComponent,
        GenericsAddComponent,
        GenericsEditComponent,
    ],
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        MaterialModule,
        MdModule,
        NgxMaskModule.forChild(),
        RouterModule.forChild(GenericsRoutes),
        MatTableExporterModule,
        CurrencyMaskModule,
        MainPipeModule,
    ],
    providers: [
        {
            provide: CURRENCY_MASK_CONFIG,
            useValue: CustomCurrencyMaskConfig
        }
    ]
})
export class GenericsModule {}