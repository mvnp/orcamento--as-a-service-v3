import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogConfirmationComponent } from './dialog-confirmation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { MdModule } from '../example/md/md.module';
import { NgxMaskModule } from 'ngx-mask';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        DialogConfirmationComponent
    ],
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        MaterialModule,
        MdModule,
        NgxMaskModule.forChild(),
    ]
})
export class DialogConfirmationModule {}
