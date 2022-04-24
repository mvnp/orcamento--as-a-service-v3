import { Component, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { BudgetService } from './budget.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatTabGroup } from '@angular/material/tabs';
import { Budget } from 'src/app/saas/_interfaces/budget.model';
import * as moment from 'moment';

import swal from 'sweetalert2';
declare var $: any;

@Component({
    selector: 'app-budget',
    templateUrl: './budget.component.html',
    styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  @ViewChild("selectionTabIndex", { static: false }) selectionTabIndex: MatTabGroup;

  showMessages: any = "Ver mensagens";
  budgetCategories: Array<any> = [];
  idPartnersCategory: number = 0;
  showPartnersOfCategory: boolean = false;
  objBudget: Array<any> = [];

  constructor(
    private _budget: BudgetService,
    private _loader: NgxSpinnerService
  ){
    this.getCategoryOfPartners();
    this.getMessagesFromPartnersToCustomers();
    this.objBudget = [{ budget_cat_id: '', subject: '' }];
  }

  ngOnInit(): void {
    interval(60000).subscribe(() => {
      this.getMessageList();
    });
  }

  getCategoryOfPartners() {
    this._loader.show();
    this._budget.getCategoryOfPartners().subscribe({
      next: (BudgetCategories: any) => {
        this._loader.hide();
        this.budgetCategories = BudgetCategories.data;
      }, 
      error: (error) => { 
        console.log(error) 
        this._loader.hide();
      },
      complete: () => {
        this._loader.hide();
      },
    });
  }

  requestPartnersOfCategory(budgetCategory) {
    this.showPartnersOfCategory = true;
    this.idPartnersCategory = budgetCategory;
  }

  restart(){
    this.showPartnersOfCategory = false;
    this.idPartnersCategory = 0;
    this.getCategoryOfPartners();
  }

  selectFirstTabIndex(segment)
  {
    const tabGroup = this.selectionTabIndex;
    if (!tabGroup || !(tabGroup instanceof MatTabGroup)) return;
  
    const tabCount = tabGroup._tabs.length;

    this._loader.show();
    this._budget.getOrcamentoCategory(segment).subscribe(
      (res: any) => {
        this.objBudget[0].budget_cat_id = res.data.id;
        this.objBudget[0].subject = res.data.description;
        tabGroup.selectedIndex = 1;
        /* this.showUp();  */
        this._loader.hide();
      }, (error: any) => {
        console.log(error);
        this._loader.hide();
      }
    );
  }

  getMessagesFromPartnersToCustomers() {
    this._loader.show();
    this._budget.getMessagesFromPartnersToCustomers().subscribe(
      (messages: any) => {
        this.showMessages = messages.data
        this._loader.hide();
      },
      (error: any) => { 
        console.log(error) 
        this._loader.hide();
      },
    );
  }

  resultNumberOfMessages(event) {
    if(event == true) {
      this.getMessagesFromPartnersToCustomers();
    }
  }

  getMessageList() {
    console.log("funcionando ...");
  }

  showUp() {
    const element = document.querySelector('.goUp');
    element.scrollIntoView();
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