import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BudgetService } from './../budget.service';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment';

@Component({
  selector: 'app-budget-resquest-cote',
  templateUrl: './budget-resquest-cote.component.html',
  styleUrls: ['./budget-resquest-cote.component.css'],
})

export class BudgetResquestCoteComponent implements OnInit {

  @Input() objBudget: any;
  @Output() numberOfMessages = new EventEmitter<boolean>();

  instructions: boolean = true;
  submitted: boolean = false;
  form: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private _loader: NgxSpinnerService, 
    private _budget: BudgetService
  ){
    this.form = this.fb.group({
      id: [0],
      subject: ['', Validators.required],
      description: ['Estou entrando em contato contigo para abrir uma solicitação de orçamento aos materiais citados no assunto desta conversa e aguardo seu contato para demonstração de produtos e serviços para que possamos conversar melhor e fechar negócio.', Validators.compose([Validators.required, Validators.minLength(180)])],
      contractor_id: ['', Validators.required],
      project_id: ['', Validators.required],
      budget_cat_id: ['', Validators.required],
      accepted: [false, Validators.required],
      created_at: [moment().format("YYYY-MM-DD hh:mm:ss")],
      updated_at: [moment().format("YYYY-MM-DD hh:mm:ss")],
    });
  }

  ngOnInit(): void {
  }

  sendRequestCote() 
  {
    this.submitted = true;

    this.form.get('accepted').setValue(false);
    this.form.get('contractor_id').setValue(3);
    this.form.get('project_id').setValue(12);
    this.form.get('budget_cat_id').setValue(this.objBudget[0].budget_cat_id);

    if(this.form.valid) 
    {
      this._loader.show();
      this._budget.sendRequestCoteAndMessagesToPartners(this.form.value).subscribe(
        (response: any) => {
          this.numberOfMessages.emit(true);
          this._loader.hide();
        }, (error: any) => {
          console.log(error);
          this._loader.hide();
        }
      );
    }
  }

  showInstructions() {
    this.instructions = false;
  }
}
