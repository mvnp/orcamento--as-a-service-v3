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
            title: "Here's a message!",
            text: 'Your file has been deleted.',
            buttonsStyling: false,
            icon: 'success',
            customClass:{
                confirmButton: "btn btn-success"
            }
        });
    }

    setRejectBudget(event) {
        swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
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
