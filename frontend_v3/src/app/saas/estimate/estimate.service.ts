import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstimateService {

    baseUrl = environment.productionUrl;
    constructor(private httpClient: HttpClient) {}

    getSpecificEstimate(id: number) {
        return this.httpClient.get(`${this.baseUrl}/budget/${id}`);
    }
}
