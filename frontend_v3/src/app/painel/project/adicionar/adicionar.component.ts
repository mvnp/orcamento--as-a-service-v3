import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SchedulesService } from './../../cronograma/schedules.service';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-adicionar',
    templateUrl: './adicionar.component.html',
    styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

    today: Date = (new Date()); 
    submitted: boolean = false;
    allSchedulesOfDatabase: Array<any>;

constructor(
    private fb: FormBuilder, 
    private _scheduleService: SchedulesService,
    private _projectService: ProjectService,
    private _loader: NgxSpinnerService
){
    this.getSchedules();
}

  ngOnInit() {}

  form: FormGroup = this.fb.group({
    project: this.fb.group({
      id:             [null, Validators.compose([Validators.required])],
      title:          ["Minha casa dos sonhos", Validators.compose([Validators.required])],
      description:    ["Eu e a Sirleii temos nossa casa dos sonhos.", Validators.compose([Validators.required])],
      propertyArea:   [160, Validators.compose([Validators.required])],
      totalArea:      [360, Validators.compose([Validators.required])],
      amount:         [450000, Validators.compose([Validators.required])],
      floors:         [2, Validators.compose([Validators.required])],
      type:           ["Sobrado", Validators.compose([Validators.required])],
      startedAt:      ["2022-03-02 18:00:00", Validators.compose([Validators.required])],
      endedAt:        ["2023-03-02 18:00:00", Validators.compose([Validators.required])],
      ownerId:        [3, Validators.compose([Validators.required])],
      contractorId:   [4, Validators.compose([Validators.required])],
    }),
    projectTasks: this.fb.group({
      options: ['', Validators.compose([Validators.required])],
    })
  });

  get project() {
    return <FormGroup>this.form.controls.project; 
  }

  get projectTasks() {
    return <FormGroup>this.form.controls.projectTasks;
  }

  onHandleDataForm(event) 
  {
    let data = [{
      project: this.form.get('project').value,
      projectTasks: this.form.get('projectTasks.options').value,
    }];

    this.submitted = true;
    this._loader.show();
    this._projectService.postData(data).subscribe(
      (response: any) => {
        console.log(response);
        this._loader.hide();
      }, (error: any) => {
        console.log(error);
        this._loader.hide();
      }
    );
  }

  keyPressNumbers(event) {
    let charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } return true;
  }

  keyPressNumbersWithDecimal(event) {
    let charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } return true;
  }

  getSchedules() {
    this._loader.show();
    this._scheduleService.getAllSchedules().subscribe(
      (response: any) => {
        this.allSchedulesOfDatabase = response.data;
        this.projectTasks.get('options').setValue(response.data);
        this._loader.hide();
      },
      (error: any) => { 
        console.log(error)
        this._loader.hide();
      }
    );
  }

  onCheckedTasks(event){
    return true;
  }
}

/** INSTRUCOES */
// this.form.getRawValue()