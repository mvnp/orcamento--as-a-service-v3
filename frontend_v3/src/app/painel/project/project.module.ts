import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdModule } from 'src/app/example/md/md.module';
import { MaterialModule } from './../../app.module';

import { ProjectRoutes } from './project.routing';
import { ProjectComponent } from './project.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { UserProfileComponent } from './../user-profile/user-profile.component';
import { ReportsComponent } from './reports/reports.component';

import { NgxMaskModule, IConfig } from 'ngx-mask';

@NgModule({
  declarations: [
    ProjectComponent,
    AdicionarComponent,
    UserProfileComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MaterialModule,
    MdModule,
    NgxMaskModule.forChild(),
    RouterModule.forChild(ProjectRoutes)
  ],
  exports: [RouterModule],
  schemas: []
})
export class ProjectModule { }
