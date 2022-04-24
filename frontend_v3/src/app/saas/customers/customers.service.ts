import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

    baseUrl = environment.productionUrl;
    constructor(private httpClient: HttpClient) {}

    getAllCustomers() {
        return this.httpClient.get(`${this.baseUrl}/customers`);
    }
}
