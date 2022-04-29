import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { ProjectsService } from '../../projects/projects.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-estimate-payments',
    templateUrl: './estimate-payments.component.html',
    styleUrls: ['./estimate-payments.component.css']
})
export class EstimatePaymentsComponent implements OnInit {

    @Input() idOrcamento: number;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<any>;

    displayedColumns: string[] = ['id', 'description', 'amount', 'requested', 'payed', 'generate', 'upload', 'confirm_payed'];
    dataSource = new MatTableDataSource;
    search = new FormControl;
    matTableExporter;

    constructor(
        private _projectsService: ProjectsService,
        private _loader: NgxSpinnerService
    ) {}

    ngOnInit(): void {
        this.getAllAccomplisheds();
    }

    getAllAccomplisheds() {
        this._loader.show();
        this._projectsService.getAllAccomplisheds(this.idOrcamento).subscribe({
            next: (accomplisheds: any) => {
                console.log('accomplisheds', accomplisheds);
                this.dataSource = new MatTableDataSource<any>(accomplisheds?.data);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
                this.buildTable();
                // this._loader.hide();
            }, error: (error) => {
                console.log(error);
                // this._loader.hide();
            }, complete: () => {
                console.log("complete");
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
}
