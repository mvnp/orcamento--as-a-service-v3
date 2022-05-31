import { Component, OnInit, ViewChild, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { NgxSpinnerService } from 'ngx-spinner';
import { GenericsService } from '../generics.service';

import { DialogConfirmationComponent } from 'src/app/dialog-confirmation/dialog-confirmation.component';
import { GenericsEditComponent } from '../generics-edit/generics-edit.component';

import { DialogObject } from '../../dialogObject';

import Swal from 'sweetalert2';

@Component({
    selector: 'app-generics-list',
    templateUrl: './generics-list.component.html',
    styleUrls: ['./generics-list.component.css']
})
export class GenericsListComponent implements OnInit, AfterViewInit, OnDestroy {

    private createdGenericsSub: Subscription;
    @Input() createdGenerics: Observable<any>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<any>;

    displayedColumns: string[] = ['id', 'description', 'date', 'status', 'edit', 'remove'];
    dataSource = new MatTableDataSource;
    search = new FormControl;
    matTableExporter;

    constructor(
        private _genericsService: GenericsService,
        private _loader: NgxSpinnerService,
        private dialog: MatDialog,
    ) {}

    ngOnInit(): void {
        this.getGenerics();
        this.createdGenericsSub = this.createdGenerics.subscribe({
            next: (response) => { 
                if(response == true) {
                    this.getGenerics();
                }
            }
        });
    }

    ngAfterViewInit(): void {
        this.buildTable();
    }
    
    getGenerics() {
        this._loader.show();
        this._genericsService.getGenerics().subscribe({
            next: (generics: any) => {
                this.dataSource = new MatTableDataSource<any>(generics.data);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
                this._loader.hide();
            }, error: (error) => {
                console.log(error);
                this._loader.hide();
            }, complete: () => {
                return;
            },
        });
    }

    editGenerics(idGenerics) {
        this.dialog.open(GenericsEditComponent, {
            width: '45rem',
            disableClose: true,
            data: <DialogObject> {
                title: 'Editar registro de generics',
                text: 'Atendimento inicial',
                btnTrue: 'Cadastrar',
                btnFalse: 'Cancelar',
                content: idGenerics
            }
        }).afterClosed().subscribe(
            (response: any) => {
                if(response == true) {
                    this.getGenerics();
                }
            }
        );
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
        this.dataSource.paginator._intl.getRangeLabel = function (page, pageSize, length)
        {
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

    removeGenerics(generic: number) {
        this.dialog.open(DialogConfirmationComponent, {
            width: '25rem',
            disableClose: true,
            data: <DialogObject> {
                title: 'Remover generics',
                text: 'Deseja realmente remover este generics? Essa ação não poderá ser desfeita.',
                btnTrue: 'Remover generics',
                btnFalse: 'Cancelar',
            }
        }).afterClosed().subscribe(
            (confirmation: any) => {
                if(generic && confirmation) {
                    this._loader.show();
                    this._genericsService.removeGenerics(generic).subscribe({
                        next: (result: any) => {
                            Swal.fire({
                                title: "Generics removido",
                                text: "O generics foi removido com sucesso.",
                                buttonsStyling: false,
                                icon: "success",
                                customClass:{
                                    confirmButton: "btn btn-success",
                                }
                            });

                            this._loader.hide();
                        }, error: (error) => {
                            Swal.fire({
                                title: "Ocorreu um erro",
                                text: "O generics não pôde ser removido. Contacte o administrador do sistema.",
                                buttonsStyling: false,
                                icon: "error",
                                customClass:{
                                    confirmButton: "btn btn-danger",
                                }
                            });
                            
                            this._loader.hide();
                        }, complete: () => {
                            this.getGenerics();
                            return;
                        },
                    });    
                }
            }
        );
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.createdGenericsSub.unsubscribe();
    }
}
