import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/app.module';
import { MdModule } from 'src/app/example/md/md.module';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMaskModule } from 'ngx-mask';
import { MatTableExporterModule } from 'mat-table-exporter';

import { BudgetsComponent } from './budgets.component';
import { BudgetsCategoriesComponent } from './budgets-categories/budgets-categories.component';
import { BudgetsAcceptedComponent } from './budgets-accepted/budgets-accepted.component';
import { BudgetsListComponent } from './budgets-list/budgets-list.component';

import { NoCommasPipe } from './no-commas.pipe';

@NgModule({
    declarations: [
        BudgetsComponent,
        BudgetsCategoriesComponent,
        BudgetsAcceptedComponent,
        BudgetsListComponent,
        NoCommasPipe,
    ],
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        MaterialModule,
        MdModule,
        MatDialogModule,
        NgxMaskModule.forChild(),
        MatTableExporterModule,
    ]
})
export class BudgetsModule {}
