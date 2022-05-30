import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NgxSpinnerService } from 'ngx-spinner';
import { ReportsService } from '../reports.service';

import { DialogObject } from '../../dialogObject';

@Component({
    selector: 'app-reports-add',
    templateUrl: './reports-add.component.html',
    styleUrls: ['./reports-add.component.css']
})
export class ReportsAddComponent implements OnInit {

    form: FormGroup;

    submitted: boolean = false;
    setConditionVerfication: boolean = true;

    constructor(
        private formBuilder: FormBuilder,
        private _loader: NgxSpinnerService,
        private _reportsService: ReportsService,
        public dialogRef: MatDialogRef<ReportsAddComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogObject,
    ) {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            type: ['', Validators.required],
            description: ['', Validators.required],
            status: [{value: 'nao', disabled: true}, Validators.required],
        });
    }

    ngOnInit(): void {}

    addReports() {
        this.submitted = true;
        console.log(this.form.value);
        
        if(this.form.valid) {
            console.log("valid!");
        }
    }

    setConditionVerficationFn(event) {        
        switch (event.value) {
            case "verificacao":
                this.form.get('status').enable();
                this.setConditionVerfication = false;
            break;
            default:
                this.form.get('status').disable();
                this.setConditionVerfication = true;
            break;
        }
    }

    public downloadFile(): void {
        this._loader.show();
        this._reportsService.downloadFile().subscribe({
            next: (response: any) => {
                let now_file = new Date().getTime();
                let fileName = response.headers.get('content-disposition')?.split(";")[1].split('=')[1] ?? `${now_file}_report.pdf`;
                let blob: Blob = response.body as Blob;
                let a = document.createElement('a');
                a.download = fileName;
                a.href = window.URL.createObjectURL(blob);
                a.click();

                this._loader.hide();
            }
        });
    }

    onYesClick(): void { this.dialogRef.close(true) }
    onNoClick(): void { this.dialogRef.close(false) }
    closeModal(): void { this.dialogRef.close(false) }
}
