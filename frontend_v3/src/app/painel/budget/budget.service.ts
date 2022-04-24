import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  urlPanel = environment.productionUrl;

  constructor(
    private httpClient: HttpClient,
  ) {}

  getCategoryOfPartners(){
    return this.httpClient.get(`${this.urlPanel}/budget/category`);
  }

  getPartnersOfSpecificCategory(category: number){
    return this.httpClient.get(`${this.urlPanel}/partner/${category}`);
  }

  getOrcamentoCategory(budget_category){
    return this.httpClient.get(`${this.urlPanel}/budget/category/${budget_category}`);
  }

  sendRequestCoteAndMessagesToPartners(cote){
    return this.httpClient.post(`${this.urlPanel}/budget/coterequest`, cote);
  }

  getMessagesFromPartnersToCustomers(){
    return this.httpClient.get(`${this.urlPanel}/budget/messages/count`);
  }
}
