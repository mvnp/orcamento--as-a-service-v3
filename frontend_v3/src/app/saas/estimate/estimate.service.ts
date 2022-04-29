import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EstimateService {

    baseUrl = environment.productionUrl;
    constructor(private httpClient: HttpClient) {}

    getSpecificEstimate(id: number) {
        return this.httpClient.get(`${this.baseUrl}/budget/${id}`);
    }

    getDataOfSpecificTask(objTask) {
        let params = new HttpParams()
            .set('project_id', objTask.project_id)
            .set('date_task_executed', objTask.date_task_executed)
            .set('project_department_service_id', objTask.project_department_service_id);

        return this.httpClient.get(`${this.baseUrl}/project-task`, { params });
    }

    setRequestPayment(objRequestPayment) {
        return this.httpClient.post(`${this.baseUrl}/request-payment`, objRequestPayment);
    }
}
