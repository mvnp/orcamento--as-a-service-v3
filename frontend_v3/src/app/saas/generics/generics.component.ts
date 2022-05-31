import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { GenericsAddComponent } from './generics-add/generics-add.component';

import { DialogObject } from '../dialogObject';

@Component({
    selector: 'app-generics',
    templateUrl: './generics.component.html',
    styleUrls: ['./generics.component.css']
})
export class GenericsComponent implements OnInit {

    createdGenericsSubject: Subject<any> = new Subject();

    constructor(private dialog: MatDialog) {}

    ngOnInit(): void {}

    createGenerics() {
        this.dialog.open(GenericsAddComponent, {
            width: '45rem',
            disableClose: true,
            data: <DialogObject> {
                title: 'Criar registro de generics',
                text: 'Atendimento inicial',
                btnTrue: 'Cadastrar',
                btnFalse: 'Cancelar',
            }
        }).afterClosed().subscribe(
            (response: any) => {
                let statusCreated = response;
                this.createdGenericsSubject.next(statusCreated);
            }
        );
    }
}
