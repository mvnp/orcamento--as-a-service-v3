import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdModule } from 'src/app/example/md/md.module';
import { MaterialModule } from './../../app.module';
import { BudgetComponent } from './budget.component';

import { BudgetRoutes } from './budget.routing';
import { BudgetResquestCoteComponent } from './budget-resquest-cote/budget-resquest-cote.component';
import { BudgetNewMessagesComponent } from './budget-new-messages/budget-new-messages.component';
import { BudgetChatterComponent } from './budget-chatter/budget-chatter.component';

@NgModule({
  declarations: [
    BudgetComponent,
    BudgetResquestCoteComponent,
    BudgetNewMessagesComponent,
    BudgetChatterComponent
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    MaterialModule,
    MdModule,
    CommonModule,
    RouterModule.forChild(BudgetRoutes),
  ],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class BudgetModule { }
