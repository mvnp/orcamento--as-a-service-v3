import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { NgxSpinnerService } from 'ngx-spinner';
import { ReportsService } from '../reports.service';

import { DialogConfirmationComponent } from 'src/app/dialog-confirmation/dialog-confirmation.component';
import { ReportsEditComponent } from '../reports-edit/reports-edit.component';

import { DialogObject } from '../../dialogObject';

import Swal from 'sweetalert2';

@Component({
    selector: 'app-reports-verifications',
    templateUrl: './reports-verifications.component.html',
    styleUrls: ['./reports-verifications.component.css']
})
export class ReportsVerificationsComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<any>;

    displayedColumns: string[] = ['id', 'name', 'status', 'date', 'edit', 'remove'];
    dataSource = new MatTableDataSource;
    search = new FormControl;
    matTableExporter;

    constructor(
        private _reportsService: ReportsService,
        private _loader: NgxSpinnerService,
        private dialog: MatDialog,
    ) {}

    ngOnInit(): void {
        this.getAllVerifications();
    }

    ngAfterViewInit(): void {
        this.buildTable();
    }
    
    getAllVerifications() {
        this._loader.show();
        this._reportsService.getAllVerifications().subscribe({
            next: (reports: any) => {
                console.log(reports);
                
                this.dataSource = new MatTableDataSource<any>(reports.data);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
                this._loader.hide();
            }, error: (error) => {
                console.log(error);
                this._loader.hide();
            }, complete: () => {
                console.log("complete");
                this._loader.hide();
            },
        });
    }

    applyFilter() {
        this.dataSource.filter = this.search.value;
    }

    buildTable() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator._intl.itemsPerPageLabel = 'Itens por página';
        this.dataSource.paginator._intl.nextPageLabel = 'Próxima';
        this.dataSource.paginator._intl.previousPageLabel = 'Anterior';
        this.dataSource.paginator._intl.firstPageLabel = 'Primeira';
        this.dataSource.paginator._intl.lastPageLabel = 'Última';
        this.dataSource.paginator._intl.getRangeLabel = function (page, pageSize, length) {
        if (length === 0 || pageSize === 0) {
            return "0 de " + length;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
        return startIndex + 1 + " - " + endIndex + " de " + length;
        };
    }

    removeReport(report: number) {
        this.dialog.open(DialogConfirmationComponent, {
            width: '25rem',
            disableClose: true,
            data: <DialogObject> {
                title: 'Remover relatório',
                text: 'Deseja realmente remover este relatório? Essa ação não poderá ser desfeita.',
                btnTrue: 'Remover produto',
                btnFalse: 'Cancelar',
            }
        }).afterClosed().subscribe(
            (confirmation: any) => {
                if(report && confirmation) {
                    this._loader.show();
                    this._reportsService.removeReport(report).subscribe({
                        next: (result: any) => {
                            Swal.fire({
                                title: "Relatório removido",
                                text: "O relatório foi removido com sucesso.",
                                buttonsStyling: false,
                                icon: "success",
                                customClass:{
                                    confirmButton: "btn btn-success",
                                }
                            });
                            this.getAllVerifications();
                            this._loader.hide();
                        }, error: (error) => {
                            Swal.fire({
                                title: "Ocorreu um erro",
                                text: "O relatório não pôde ser removido. Contacte o administrador do sistema.",
                                buttonsStyling: false,
                                icon: "error",
                                customClass:{
                                    confirmButton: "btn btn-danger",
                                }
                            });
                            console.log(error);
                            this._loader.hide();
                        }, complete: () => {
                            return;
                        },
                    });    
                }
            }
        );
    }

    editReport(idReport) {
        this.dialog.open(ReportsEditComponent, {
            width: '45rem',
            disableClose: true,
            data: <DialogObject> {
                title: 'Editar registro de relatório',
                text: 'Atendimento inicial',
                btnTrue: 'Cadastrar',
                btnFalse: 'Cancelar',
                content: idReport
            }
        }).afterClosed().subscribe(
            (response: any) => {
                console.log("matDialog closed!");
            }
        );
    }
}
