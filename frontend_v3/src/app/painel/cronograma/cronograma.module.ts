import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../app.module';
import { MdModule } from 'src/app/example/md/md.module';

import { CronogramaRoutes } from './cronograma.routing';
import { CronogramaComponent } from './cronograma.component';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [
        CronogramaComponent,
        ListComponent
    ],
    imports: [
        FormsModule, 
        ReactiveFormsModule,
        MaterialModule,
        MdModule,
        CommonModule,
        RouterModule.forChild(CronogramaRoutes),
    ],
    exports: [RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CronogramaModule { }