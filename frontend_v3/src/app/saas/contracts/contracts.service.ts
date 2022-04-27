import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {

    baseUrl = environment.productionUrl;
    constructor(private httpClient: HttpClient) {}

    getAllContractsSample() {
        return this.httpClient.get(`${this.baseUrl}/contract-samples`);
    }

    getMyContractsSample() {
        return this.httpClient.get(`${this.baseUrl}/contract-properties`);
    }
}
