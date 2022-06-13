import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from 'src/app/app.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { DashboardComponent } from './dashboard.component';

import { CronogramaModule } from './../../painel/cronograma/cronograma.module';
import { BudgetModule } from './../../painel/budget/budget.module';
import { SaasModule } from './../../saas/saas.module';

import { DashboardRoutes } from './dashboard.routing';

import { DialogConfirmationModule } from 'src/app/dialog-confirmation/dialog-confirmation.module';

import { AuthGuard } from 'src/app/_helpers/auth.guard';
import { AuthService } from 'src/app/_helpers/auth.service';
import { appInitializer } from 'src/app/_helpers/app.initializer';
import { JwtInterceptor } from 'src/app/_helpers/jwt.interceptor';
import { ErrorInterceptor } from 'src/app/_helpers/error.interceptor';

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
        DialogConfirmationModule
    ],
    declarations: [
        DashboardComponent,
    ],
    providers: [
        AuthGuard,
        AuthService,
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializer,
            multi: true,
            deps: [AuthService]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        },
    ]
})

export class DashboardModule {}
