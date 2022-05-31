import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GenericsService {

    baseUrl = environment.productionUrl;

    constructor(private http: HttpClient) {}

    getGenerics() {
        return this.http.get(`${this.baseUrl}/generics`);
    }

    getGenericsByID(id) {
        return this.http.get(`${this.baseUrl}/generics/${id}`);
    }

    saveGenerics(body) {
        return this.http.post(`${this.baseUrl}/generics`, body);
    }

    editGenerics(id, body) {
        return this.http.put(`${this.baseUrl}/generics/${id}`, body);
    }

    removeGenerics(id) {
        return this.http.delete(`${this.baseUrl}/generics/${id}`);
    }
}
