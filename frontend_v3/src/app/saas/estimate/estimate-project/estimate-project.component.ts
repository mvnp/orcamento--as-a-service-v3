import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { NgxSpinnerService } from 'ngx-spinner';
import { EstimateService } from '../estimate.service';

import * as moment from 'moment';
import swal from 'sweetalert2';
import { DialogMessageObject } from 'src/app/dialog-message/dialogMessageObject';
import { DialogMessageComponent } from 'src/app/dialog-message/dialog-message.component';

declare var $: any;

@Component({
    selector: 'app-estimate-project',
    templateUrl: './estimate-project.component.html',
    styleUrls: ['./estimate-project.component.css']
})
export class EstimateProjectComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<any>;

    displayedColumns: string[] = ['id'];
    dataSource = new MatTableDataSource;
    search = new FormControl;
    matTableExporter;
    dataProjectTasks;
    columnsOfTable;

    departments;
    amount;
    months;
    monthRewrite: Array<any> = [];

    public idOrcamento;

    constructor(
        private _estiamteService: EstimateService,
        private _loader: NgxSpinnerService,
        private route: ActivatedRoute,
        private dialog: MatDialog
    ) {
        this.dataProjectTasks = "";
    }

    ngOnInit(): void {
        moment.locale('pt-br');
        this.idOrcamento = this.route.snapshot.paramMap.get('id');
        if(this.idOrcamento && !isNaN(this.idOrcamento)){
            this.getSpecificEstimate(this.idOrcamento);
        } else {
            swal.fire({
                icon: "error",
                title: "Opsss! Algo aconteceu.",
                text: "O orçamento que está tentando acessar não existe! Se acha que é um erro, entre em contato com nosso suporte.",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "btn btn-danger",
                },
            });
        }
    }

    ngAfterViewInit() {
        // this.buildTable();
    }
    
    getSpecificEstimate(idOrcamento) {
        this._loader.show();
        this._estiamteService.getSpecificEstimate(idOrcamento).subscribe({
            next: (result: any) => {
                this.dataProjectTasks = result.data;
                this.departments = this.dataProjectTasks.departments;
                this.amount = this.dataProjectTasks.amount;
                this.months = this.dataProjectTasks.months;
                this.months.forEach(month => {
                    this.monthRewrite.push(moment(month).format("MMM YYYY"))
                });
                // this.columnsOfTable = this.convertTimeColumn(result.data.time_of_project);     
                // this.dataSource = new MatTableDataSource<any>(result.data.departments);
                // console.log(this.dataSource);
                // this.dataSource.paginator = this.paginator;
                // this.dataSource.sort = this.sort;
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
}

/* ################################################################## *//*
/* ################### SUCCESS ###################################### *//*
/* ################################################################## *//*
swal.fire({
  icon: "success",
  title: "Good job!",
  text: "You clicked the button!",
  buttonsStyling: false,
  customClass:{
    confirmButton: "btn btn-success",
  },
});
//* ################################################################### */
//* ################################################################### */
//* ################################################################### */

/* ################################################################## *//*
/* ################### CONFIRM AND GET YES OR NO #################### *//*
/* ################################################################## *//*
swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this imaginary file!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it',
    customClass:{
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false
}).then((result) => {
  if (result.value) {
    swal.fire({
        title: 'Deleted!',
        text: 'Your imaginary file has been deleted.',
        icon: 'success',
        customClass:{
          confirmButton: "btn btn-success",
        },
        buttonsStyling: false
    });
  } else {
    swal.fire({
        title: 'Cancelled',
        text: 'Your imaginary file is safe :)',
        icon: 'error',
        customClass:{
          confirmButton: "btn btn-info",
        },
        buttonsStyling: false
    });
  }
})
//* ################################################################### */
//* ################################################################### */
//* ################################################################### */

/* ################################################################## *//*
/* ################### CUTOM HTML BLOCK ############################# *//*
/* ################################################################## *//*
swal.fire({
    title: 'HTML example',
    buttonsStyling: false,
    customClass:{
      confirmButton: "btn btn-success",
    },
    html: 'You can use <b>bold text</b>, ' +
        '<a href="http://github.com">links</a> ' +
        'and other HTML tags'
});
//* ################################################################### */
//* ################################################################### */
//* ################################################################### */

/* ################################################################## *//*
/* ################### AUTO CLOSE ################################### *//*
/* ################################################################## *//*
swal.fire({
  title: "Auto close alert!",
  text: "I will close in 2 seconds.",
  timer: 2000,
  showConfirmButton: false
});
//* ################################################################### */
//* ################################################################### */
//* ################################################################### */

/* ################################################################## *//*
/* ################### WITH INPUT FIELDS ############################ *//*
/* ################################################################## *//*
swal.fire({
  title: 'Input something',
  html: '<div class="form-group">' +
      '<input id="input-field" type="text" class="form-control" />' +
      '</div>',
  showCancelButton: true,
  customClass:{
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger',
  },
  buttonsStyling: false
}).then(function(result) {
    console.log(result);
    swal.fire({
        icon: 'success',
        html: 'You entered: <strong>' +
            $('#input-field').val() +
            '</strong>',
        customClass:{
          confirmButton: 'btn btn-success',
        },
        buttonsStyling: false

    })
});
//* ################################################################### */
//* ################################################################### */
//* ################################################################### */