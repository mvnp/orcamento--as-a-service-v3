import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from 'src/app/app.module';
import { MdModule } from './../../example/md/md.module';
import { MatTableExporterModule } from 'mat-table-exporter';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';

import { ProjectsComponent } from './projects.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ManagerProjectsComponent } from './manager-projects/manager-projects.component';
import { CardProjectsComponent } from './card-projects/card-projects.component';

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
        ProjectsComponent,
        ListProjectsComponent,
        LandingPageComponent,
        ManagerProjectsComponent,
        CardProjectsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        MaterialModule,
        MdModule,
        NgxMaskModule.forChild(),
        MatTableExporterModule,
        CurrencyMaskModule
    ],
    providers: [
        {
            provide: CURRENCY_MASK_CONFIG,
            useValue: CustomCurrencyMaskConfig
        }
    ]
})
export class ProjectsModule { }
