import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CronogramaService {

  urlPanel = environment.productionUrl;

  constructor(
    private httpClient: HttpClient,
  ) {}

  getCronograma(id) {
    return this.httpClient.get(`${this.urlPanel}/cronograma/${id}`);
  }

  setCurrentMonthPayment(item: number, amount: string) {
    return this.httpClient.put(`${this.urlPanel}/payment/${item}`, { 
      "amount": amount
    });
  }

  setCurrentMonthReturnPayment(item: number) {
    return this.httpClient.put(`${this.urlPanel}/payment/${item}`, { 
      "amount": 0
    });
  }
}