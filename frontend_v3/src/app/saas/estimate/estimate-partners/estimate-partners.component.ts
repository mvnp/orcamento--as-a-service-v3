import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { NgxSpinnerService } from 'ngx-spinner';
import { ProjectsService } from '../../projects/projects.service';

@Component({
    selector: 'app-estimate-partners',
    templateUrl: './estimate-partners.component.html',
    styleUrls: ['./estimate-partners.component.css']
})
export class EstimatePartnersComponent implements OnInit {

    @Input() idOrcamento: number;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<any>;

    displayedColumns: string[] = ['id', 'description', 'show_partner', 'partner'];
    dataSource = new MatTableDataSource;
    search = new FormControl;
    matTableExporter;

    constructor(
        private _projectsService: ProjectsService,
        private _loader: NgxSpinnerService
    ) { }

    ngOnInit(): void {
        this.getAllTasksGrouped();
    }

    getAllTasksGrouped() {
        this._loader.show();
        this._projectsService.getAllTasksGrouped(this.idOrcamento).subscribe({
            next: (groupedTasks: any) => {
                console.log('groupedTasks', groupedTasks);
                this.dataSource = new MatTableDataSource<any>(groupedTasks.data);
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
