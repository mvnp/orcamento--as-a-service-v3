import { DialogFunctionsObject } from './../../dialogFunctionsObject';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { BudgetsService } from '../budgets.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { BudgetsListComponent } from '../budgets-list/budgets-list.component';

@Component({
    selector: 'app-budgets-accepted',
    templateUrl: './budgets-accepted.component.html',
    styleUrls: ['./budgets-accepted.component.css']
})
export class BudgetsAcceptedComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<any>;

    displayedColumns: string[] = ['id', 'subject', 'customer', 'phone', 'category', 'download'];
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
        this.getAllBudgetsAccepted();
    }

    ngAfterViewInit(): void {
        this.buildTable();
    }
    
    getAllBudgetsAccepted() {
        this._loader.show();
        this.categorias = this._budgetsService.getAllBudgetsAccepted().subscribe({
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

    downloadProposal(event) {
        console.log("download arquivo!");
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
