import { Component, OnInit } from '@angular/core';
import { CronogramaService } from './cronograma.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.css']
})
export class CronogramaComponent implements OnInit {

  public id: string;
  public project_id: number;
  public projectCronograma: Array<any> = [];
  public projectMonths: Array<any> = [];
  public sumOfMonthInYear: Array<any> = [];
  public cronogramaLoaded = true;

  constructor(
    private route: ActivatedRoute,
    private _cronogramaService: CronogramaService,
    private _spinner: NgxSpinnerService
  ) {
    console.log("hello cronograma");
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.project_id = Number(this.id);
    this.getCronograma(this.id);
    moment.locale('pt-br');
  }

  getCronograma(id) 
  {
    this._spinner.show();
    this._cronogramaService.getCronograma(id).subscribe(
      (response: any) => {  
        console.log(response.data);
        let res = response.data;
        this.sumOfMonthInYear = res._year_sum;
        this.projectCronograma = res._object;
        res._duration.forEach((data, index) => { this.projectMonths[index] = moment(data).format('MMM YYYY') });
        this.cronogramaLoaded = false;
        this._spinner.hide();
      }, 
      error => {
        console.log(error);
        this._spinner.hide();
      }
    );
  }

  currentMonthPayment(item, amount)
  { 
    this._spinner.show();
    this._cronogramaService.setCurrentMonthPayment(item, amount).subscribe(
      (response: any) => {
        this.getCronograma(this.project_id);
        setTimeout(() => {
          this._spinner.hide();
        }, 3000);
      }, (error: any) => {
        console.log(error);
        this._spinner.hide();
      },
    );
  }

  currentMonthReturn(item)
  {
    this._spinner.show();
    this._cronogramaService.setCurrentMonthReturnPayment(item).subscribe(
      (response: any) => {
        this.getCronograma(this.project_id);
        setTimeout(() => {
          this._spinner.hide();
        }, 3000);
      }, (error: any) => {
        console.log(error);
        this._spinner.hide();
      },
    );
  }

  changeVisibilityOfColumn(event){
    console.log(event);
  }

  firstDayOfMonth(){
    return moment().startOf('month').format('DD-MM-YYYY');
  }

  lastDayOfMonth(){
    return moment().endOf('month').format('DD-MM-YYYY');
  }
}
