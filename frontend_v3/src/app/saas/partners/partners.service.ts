import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

    baseUrl = environment.productionUrl;
    constructor(private httpClient: HttpClient) {}

    getAllPartners() {
        return this.httpClient.get(`${this.baseUrl}/partners`);
    }
}
