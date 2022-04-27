import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContractsService } from '../contracts.service';

@Component({
    selector: 'app-my-contracts',
    templateUrl: './my-contracts.component.html',
    styleUrls: ['./my-contracts.component.css']
})
export class MyContractsComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<any>;

    displayedColumns: string[] = ['id', 'contract', 'customer', 'amount_of', 'generate', 'accept', 'download', 'remove'];
    dataSource = new MatTableDataSource;
    search = new FormControl;
    matTableExporter;
    samples;

    constructor(
        private _contractsService: ContractsService,
        private _loader: NgxSpinnerService
    ) { }

    ngOnInit(): void {
        this.getMyContracts();
    }

    ngAfterViewInit() {}

    getMyContracts() {
        this._loader.show();
        this._contractsService.getMyContracts().subscribe({
            next: (mycontracts: any) => {
                console.log(mycontracts);
                
                this.dataSource = new MatTableDataSource<any>(mycontracts.data);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
                this.buildTable();
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
        }
    };
}
