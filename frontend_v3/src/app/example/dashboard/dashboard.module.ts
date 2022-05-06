import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from 'src/app/app.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { DashboardComponent } from './dashboard.component';
import { CronogramaModule } from './../../painel/cronograma/cronograma.module';
import { BudgetModule } from './../../painel/budget/budget.module';

import { DashboardRoutes } from './dashboard.routing';

import { SaasModule } from './../../saas/saas.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
        ReactiveFormsModule,
        FormsModule,
        MdModule,
        MaterialModule,
        NgxMaskModule.forChild(),
        CronogramaModule,
        BudgetModule,
        SaasModule,
    ],
    declarations: [DashboardComponent]
})

export class DashboardModule {}
