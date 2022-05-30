import { Component, OnInit } from '@angular/core';

import { ReportsService } from './reports.service';
import { NgxSpinnerService } from 'ngx-spinner';

import { ReportsAddComponent } from './reports-add/reports-add.component';
import { MatDialog } from '@angular/material/dialog';

import { DialogObject } from '../dialogObject';

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

    constructor(
        private dialog: MatDialog,
        private _loader: NgxSpinnerService,
        private _reportsService: ReportsService,
    ) {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {}

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
    
    createReportRegister() {
        this.dialog.open(ReportsAddComponent, {
            width: '45rem',
            disableClose: true,
            data: <DialogObject> {
                title: 'Criar registro de relatório',
                text: 'Atendimento inicial',
                btnTrue: 'Cadastrar',
                btnFalse: 'Cancelar',
            }
        }).afterClosed().subscribe(
            (response: any) => {
                console.log("matDialog closed!");
            }
        );
    }
}