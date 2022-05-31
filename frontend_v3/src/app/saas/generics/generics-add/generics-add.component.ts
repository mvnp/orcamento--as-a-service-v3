import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { GenericsService } from '../generics.service';
import { NgxSpinnerService } from 'ngx-spinner';

import { DialogObject } from '../../dialogObject';

import Swal from 'sweetalert2';

@Component({
    selector: 'app-generics-add',
    templateUrl: './generics-add.component.html',
    styleUrls: ['./generics-add.component.css']
})
export class GenericsAddComponent implements OnInit {

    form: FormGroup;
    submitted: boolean = false;

    short: string = 'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.'
    text: string = 'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    constructor(
        private formBuilder: FormBuilder,
        private _loader: NgxSpinnerService,
        public _genericsService: GenericsService,
        public dialogRef: MatDialogRef<GenericsAddComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogObject,
    ) {
        this.form = this.formBuilder.group({
            status: ['', Validators.required],
            description: [this.text, Validators.required],
            short_description: [this.short, Validators.required],
        });
    }

    ngOnInit(): void {}

    addGenerics() { 
        this.submitted = true;
        if(this.form.valid) {
            this._loader.show();
            this._genericsService.saveGenerics(this.form.value).subscribe({
                next: (response: any) => {
                    Swal.fire({
                        title: "Generics criado",
                        text: response.data,
                        buttonsStyling: false, icon: "success",
                        customClass: { confirmButton: "btn btn-success" }
                    });
                    
                    this.dialogRef.close(true);
                    this._loader.hide();
                },
                error: (error: any) => {
                    Swal.fire({
                        title: "Ocorreu um erro",
                        text: "O generics não pôde ser salvo. Contacte o administrador do sistema.",
                        buttonsStyling: false, icon: "error",
                        customClass: { confirmButton: "btn btn-danger" }
                    });

                    this.dialogRef.close(false);
                    this._loader.hide();
                },
                complete: () => {
                    return;
                },
            });
        }
    }

    onYesClick() { this.dialogRef.close(true) }
    onNoClick() { this.dialogRef.close(false) }
    closeModal() { this.dialogRef.close(false) }
}
