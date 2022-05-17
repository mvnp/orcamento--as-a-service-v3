import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogFunctionsObject } from './../../dialogFunctionsObject';

import { NgxSpinnerService } from 'ngx-spinner';

import swal from 'sweetalert2';
declare var $: any;

@Component({
    selector: 'app-budgets-sends',
    templateUrl: './budgets-sends.component.html',
    styleUrls: ['./budgets-sends.component.css']
})
export class BudgetsSendsComponent implements OnInit {

    form: FormGroup;
    submitted: boolean = false;

    pdfFile;
    sendPdfFile;
    pdfFileProposal;
    imageUrl;

    constructor(
        public fb: FormBuilder,
        private sanitizer: DomSanitizer,
        private _loader: NgxSpinnerService,
        public dialogRef: MatDialogRef<BudgetsSendsComponent>,
        @Inject(MAT_DIALOG_DATA) public data : DialogFunctionsObject
    ) {
        this.form = this.fb.group({
            'project_id': [1, Validators.required],
            'partner_id': [1, Validators.required],
            'subject': ['Aquecimento de água', Validators.required],
            'description': ['Está enviando uma proposta ao cliente Marcos Nasc Pereira referente a solicitação de orçamento na categoria Aquecimento de água. Revise bem os dados, certifique-se de estar enviando o arquivo correto.', Validators.required],
            'pdf_proposal': ['', Validators.required],
            'accepted': [false, Validators.required],
        });
    }

    ngOnInit(): void {}

    onYesClick() {
        this.submitted = true;

        if(this.form.valid) {
            console.log('form valid!');
        }
    }

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

    onFileSelected(event)
    {
        let file = event.target.files[0];
        event.srcElement.value = null;
        console.log("arquivo: ", file);

        if (file.size > 10485760) {
                return this.docSizeExceeded();
        } else {
            this.pdfFile = file;
            this.sendPdfFile = true;
            const reader = new FileReader();
            reader.onload = e => {
                // this.form.patchValue({
                //     pdf_proposal: reader.result,
                // });
                this.imageUrl = reader.result;
                this.pdfFileProposal = this.sanitizer.bypassSecurityTrustUrl(reader.result.toString());
            };
            reader.readAsDataURL(file);

            return swal.fire({
                title: 'Arquivo enviado!',
                text: 'Sua proposta foi enviada com sucesso e deve aguardar um feedback do parceiro quanto a aceitação da mesma.',
                buttonsStyling: false,
                icon: 'success',
                customClass:{
                    confirmButton: "btn btn-success",
                },
            });
        }
    }
    
    docSizeExceeded() {
        return swal.fire({
            title: 'Arquivo inválido!',
            text: 'O arquivo enviado ultrapassa 10MB, tamanho máximo permitido pelo sistema. Envie um arquivo menor.',
            buttonsStyling: false,
            icon: 'error',
            customClass:{
                confirmButton: "btn btn-danger",
            },
        });
    }
}
