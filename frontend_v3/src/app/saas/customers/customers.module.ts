import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from 'src/app/app.module';
import { MdModule } from './../../example/md/md.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        MaterialModule,
        MdModule,
        NgxMaskModule.forChild(),
    ]
})
export class CustomersModule { }

