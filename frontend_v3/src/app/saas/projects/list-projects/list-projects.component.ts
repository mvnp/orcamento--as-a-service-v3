import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { NgxSpinnerService } from 'ngx-spinner';
import { ProjectsService } from '../projects.service';

@Component({
    selector: 'app-list-projects',
    templateUrl: './list-projects.component.html',
    styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<any>;

    @Output() emitirOrcamentoId = new EventEmitter();

    displayedColumns: string[] = ['id', 'title', 'property_area', 'total_area', 'floors', 'amount', 'ended_at', 'orc', 'cdo', 'par'];
    dataSource = new MatTableDataSource;
    search = new FormControl;
    matTableExporter;

    constructor(
        private _projectsService: ProjectsService,
        private _loader: NgxSpinnerService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.getAllProjects();
    }

    ngAfterViewInit() {} 
    
    getAllProjects() {
        this._loader.show();
        this._projectsService.getAllProjects().subscribe({
            next: (projects: any) => {
                this.dataSource = new MatTableDataSource<any>(projects.data);
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
    
    getOrcamento(id){
        // this.emitirOrcamentoId.emit(id);
        this.router.navigate([`/saas/estimate/${id}`]);
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

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
