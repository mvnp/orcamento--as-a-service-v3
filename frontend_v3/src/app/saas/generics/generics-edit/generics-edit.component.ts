import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { GenericsService } from '../generics.service';
import { NgxSpinnerService } from 'ngx-spinner';

import { DialogObject } from '../../dialogObject';

import Swal from 'sweetalert2';

@Component({
    selector: 'app-generics-edit',
    templateUrl: './generics-edit.component.html',
    styleUrls: ['./generics-edit.component.css']
})
export class GenericsEditComponent implements OnInit {

    form: FormGroup;
    submitted: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private _loader: NgxSpinnerService,
        public _genericsService: GenericsService,
        public dialogRef: MatDialogRef<GenericsEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogObject,
    ) {
        this.form = this.formBuilder.group({
            status: [null, Validators.required],
            description: ['', Validators.required],
            short_description: ['', Validators.required],
        });
    }

    ngOnInit(): void {
        this.editGenericsData(this.data.content);
    }

    editGenerics() {
        this.submitted = true;
        if(this.form.valid) {
            let idGenerics = this.data.content;
            
            this._genericsService.editGenerics(idGenerics, this.form.value).subscribe({
                next: (generic: any) => {
                    Swal.fire({
                        title: "Generics atualizado",
                        text: generic.data,
                        buttonsStyling: false, icon: "success",
                        customClass: { confirmButton: "btn btn-success" }
                    });
    
                    this.dialogRef.close(true);
                    this._loader.hide();
                },
                error: (error: any) => {
                    Swal.fire({
                        title: "Ocorreu um erro",
                        text: "Não foi possível atualizar o generics. Contacte o administrador do sistema.",
                        buttonsStyling: false, icon: "error",
                        customClass: { confirmButton: "btn btn-danger" }
                    });
    
                    this.dialogRef.close(false);
                    this._loader.hide();
                },
                complete: () => {
                    return;
                }
            });
        }
    }

    editGenericsData(idGenerics) {
        this._loader.show();
        this._genericsService.getGenericsByID(idGenerics).subscribe({
            next: (generics: any) => {
                let resGeneric = generics.data;
                this.form.patchValue({
                    description: resGeneric.description,
                    short_description: resGeneric.short_description,
                    status: ((resGeneric.status == 0) ? false : true),
                });

                this._loader.hide();
            },
            error: (error: any) => {
                Swal.fire({
                    title: "Ocorreu um erro",
                    text: "Não foi possível carregar o generics. Contacte o administrador do sistema.",
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

    onYesClick(): void { this.dialogRef.close(true) }
    onNoClick(): void { this.dialogRef.close(false) }
    closeModal(): void { this.dialogRef.close(false) }
}
