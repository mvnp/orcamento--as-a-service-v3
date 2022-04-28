import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProjectsService } from '../../projects/projects.service';

@Component({
    selector: 'app-estimate-list',
    templateUrl: './estimate-list.component.html',
    styleUrls: ['./estimate-list.component.css']
})
export class EstimateListComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<any>;

    @Output() userHasOneProject = new EventEmitter<boolean>();
    @Output() emitirOrcamentoId = new EventEmitter();

    displayedColumns: string[] = ['id', 'title', 'property_area', 'total_area', 'floors', 'amount', 'ended_at', 'cron'];
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

    ngAfterViewInit() {
        this.userHasOneProject.emit(true);
    } 
    
    getAllProjects() {
        this._loader.show();
        this._projectsService.getAllProjects().subscribe({
            next: (projects: any) => {
                this.dataSource = new MatTableDataSource<any>(projects.data);
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
