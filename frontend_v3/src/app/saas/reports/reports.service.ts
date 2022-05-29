import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ReportsService {

    baseUrl = environment.productionUrl;
    sourceReportsUrl = environment.sourceReports;

    constructor(private http: HttpClient) {}

    getReport(idProject: number = 1) {
        return this.http.get(`${this.baseUrl}/reports`);
    }

    downloadFile() {
        return this.http.get("http://localhost:8000/api/v1/reports/pdf/1", {
            observe: 'response', 
            responseType: 'blob'
        });
    }  
}
