import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { SearchPipe } from './search.pipe';
import { OrderByPipe } from './order-by.pipe';
import { NoCommaPipe } from './no-comma.pipe';

@NgModule({
    declarations:[
        SearchPipe,
        OrderByPipe,
        NoCommaPipe
    ],
    imports:[
        CommonModule
    ],
    exports:[
        SearchPipe,
        OrderByPipe,
        NoCommaPipe
    ]
})
export class MainPipeModule{}