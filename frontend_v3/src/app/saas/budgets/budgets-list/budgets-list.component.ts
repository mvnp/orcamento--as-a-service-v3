import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogFunctionsObject } from './../../dialogFunctionsObject';

import { NgxSpinnerService } from 'ngx-spinner';

import swal from 'sweetalert2';
declare var $: any;

@Component({
    selector: 'app-budgets-list',
    templateUrl: './budgets-list.component.html',
    styleUrls: ['./budgets-list.component.css']
})
export class BudgetsListComponent implements OnInit {

    constructor(
        public fb: FormBuilder,
        private _loader: NgxSpinnerService,
        public dialogRef: MatDialogRef<BudgetsListComponent>,
        @Inject(MAT_DIALOG_DATA) public data : DialogFunctionsObject
    ) {}

    ngOnInit(): void {}

    onYesClick(): void {}

    setAcceptBudget(event) {
        swal.fire({
            title: "Whoooww!",
            text: 'Você aceitou o contrato com sucesso e está notificação aparecerá em breve para o parceiro.',
            buttonsStyling: false,
            icon: 'success',
            customClass:{
                confirmButton: "btn btn-success"
            }
        });
    }

    setRejectBudget(event) {
        swal.fire({
            title: 'Nada feito!',
            text: 'Você declinou esta oferta e o parceiro foi avisado. Não se preocupe, em breve outros orçamentos vão chegar.',
            buttonsStyling: false,
            icon: 'error',
            customClass:{
                confirmButton: "btn btn-danger",
            },
        })
    }

    onNoClick(): void { this.dialogRef.close(false) }
    closeModal() { return this.dialogRef.close(false) }
}
