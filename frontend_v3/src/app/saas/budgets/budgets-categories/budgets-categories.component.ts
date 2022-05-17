import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog } from '@angular/material/dialog';

import { BudgetsListComponent } from '../budgets-list/budgets-list.component';
import { BudgetsSendsComponent } from './../budgets-sends/budgets-sends.component';

import { DialogFunctionsObject } from './../../dialogFunctionsObject';

import { NgxSpinnerService } from 'ngx-spinner';
import { BudgetsService } from '../budgets.service';

@Component({
    selector: 'app-budgets-categories',
    templateUrl: './budgets-categories.component.html',
    styleUrls: ['./budgets-categories.component.css']
})
export class BudgetsCategoriesComponent implements OnInit, AfterViewInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<any>;

    displayedColumns: string[] = ['id', 'category', 'partners', 'viewBudget', 'sendBudget', 'enable', 'disable'];
    dataSource = new MatTableDataSource;
    search = new FormControl;
    matTableExporter;
    categorias: Subscription;

    constructor(
        private _budgetsService: BudgetsService,
        private _loader: NgxSpinnerService,
        private dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.getAllBudgetsCategories();
    }

    ngAfterViewInit(): void {
        this.buildTable();
    }
    
    getAllBudgetsCategories() {
        this._loader.show();
        this.categorias = this._budgetsService.getAllBudgetsCategories().subscribe({
            next: (budget: any) => {
                this.dataSource = new MatTableDataSource<any>(budget.data);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }, error: (error) => {
                console.log(error);
            }, complete: () => {
                console.log("complete");
                this._loader.hide();
            },
        });
    }

    openBudgets() {
        this.dialog.open(BudgetsListComponent, {
            disableClose: true,
            maxHeight: '75%',
            width: '50rem',
            data: <DialogFunctionsObject> { 
                title: 'Título Modal Cadastrar',
                text: 'Subtítulo Modal Cadastrar',
                btnTrue: 'Cadastrar',
                btnFalse: 'Cancelar',
            }
        }).afterClosed().subscribe(
            (response: any) => {
                // faz alguma coisa com a resposta do treco
                console.log(response);
            }
        );
    }

    sendBudgets() {
        this.dialog.open(BudgetsSendsComponent, {
            disableClose: true,
            maxHeight: '75%',
            width: '45rem',
            data: <DialogFunctionsObject> { 
                title: 'Orçamento - Aquecimento de água',
                text: 'Está enviando uma proposta ao cliente <strong>Marcos Nasc Pereira</strong> referente a solicitação de orçamento na categoria <strong>Aquecimento de água</strong>. Revise bem os dados, certifique-se de estar enviando o arquivo correto.',
                btnTrue: 'Cadastrar',
                btnFalse: 'Cancelar',
            }
        }).afterClosed().subscribe(
            (response: any) => {
                // faz alguma coisa com a resposta do treco
                console.log(response);
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

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.categorias.unsubscribe();
    }
}
