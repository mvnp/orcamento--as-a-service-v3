import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NgxSpinnerService } from 'ngx-spinner';
import { EstimateService } from './../../estimate.service';
import { DialogPaymentObject } from './dialogPaymentObject';

import swal from 'sweetalert2';
declare var $: any;

@Component({
    selector: 'app-dialog-payment',
    templateUrl: './dialog-payment.component.html',
    styleUrls: ['./dialog-payment.component.css']
})
export class DialogPaymentComponent implements OnInit {

    form: FormGroup;

    constructor(
        public fb: FormBuilder,
        private _loader: NgxSpinnerService,
        private _estimateService: EstimateService,
        public dialogRef: MatDialogRef<DialogPaymentComponent>,
        @Inject(MAT_DIALOG_DATA) public data : DialogPaymentObject
    ){
        console.log("recebendo >>>> ", data);
        this.form = this.fb.group({
            'project_id': [this.data.payments[0].project_id, Validators.required],
            'project_task_id': [this.data.payments[0].id, Validators.required],
            'total_amount': [this.data.payments[0].total_amount_task, Validators.required],
            'is_payed': [false, Validators.required],
        });
    }

    ngOnInit(): void {}

    onNoClick(): void {
        this.dialogRef.close(false);
        // swal.fire({
        //     title: 'Cancelled',
        //     text: 'Your imaginary file is safe :)',
        //     icon: 'error',
        //     customClass:{ 
        //         confirmButton: "btn btn-info" 
        //     },
        //     buttonsStyling: false
        // }); 
    } 

    onYesClick(): void { 
        this._loader.show();
        this._estimateService.setRequestPayment(this.form.value).subscribe({
            next: (response: any) => {
                swal.fire({
                    title: "Bom trabalho!",
                    text: response.data,
                    buttonsStyling: false,
                    icon: "success",
                    customClass:{
                        confirmButton: "btn btn-success",
                    }
                }); 
                this.dialogRef.close(true);
                this._loader.hide();
            }, error: (error) => {
                console.log(error);
                this._loader.hide();
            }, complete: () => {
                console.log("complete");
                this._loader.hide();
            }
        });
    }

    closeModal() {
        return this.dialogRef.close(false);
    }
}