import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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


    getReportByID(idReport: number) {
        let params = new HttpParams().set('report_id', idReport);
        return this.http.get(`${this.baseUrl}/reports`, { params });
    }

    downloadFile() {
        return this.http.get("http://localhost:8000/api/v1/reports/pdf/1", {
            observe: 'response', 
            responseType: 'blob'
        });
    }
    
    getAllVerifications(idProject = 1) {
        let params = new HttpParams().set('type', 'verificacao');
        return this.http.get(`${this.baseUrl}/reports/${idProject}`, { params });
    }

    getAllObservations(idProject = 1) {
        let params = new HttpParams().set('type', 'observacao');
        return this.http.get(`${this.baseUrl}/reports/${idProject}`, { params });
    }

    removeReport(idReport) {
        return this.http.delete(`${this.baseUrl}/reports/${idReport}`);
    }
}
