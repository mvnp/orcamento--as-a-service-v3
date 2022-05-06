import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BudgetsService {

    baseUrl = environment.productionUrl;
    
    constructor(private httpClient: HttpClient) {}

    getAllBudgetsCategories(): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}/budget-categories`);
    }
}
