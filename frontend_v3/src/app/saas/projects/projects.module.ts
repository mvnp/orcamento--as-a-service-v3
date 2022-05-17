import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from 'src/app/app.module';
import { MdModule } from './../../example/md/md.module';
import { MatTableExporterModule } from 'mat-table-exporter';

import { ProjectsComponent } from './projects.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ManagerProjectsComponent } from './manager-projects/manager-projects.component';
import { CardProjectsComponent } from './card-projects/card-projects.component';

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
    ]
})
export class ProjectsModule { }
