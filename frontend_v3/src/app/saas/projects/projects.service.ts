import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {

    baseUrl = environment.productionUrl;
    constructor(private httpClient: HttpClient) {}

    getAllProjects() {
        return this.httpClient.get(`${this.baseUrl}/projects`);
    }

    getProjectsOfThisUser(user) {
        return this.httpClient.get(`${this.baseUrl}/project/${user}`);
    }

    getAllAccomplisheds(cronograma) {
        let params = new HttpParams().set('project_id', cronograma);
        return this.httpClient.get(`${this.baseUrl}/accomplisheds`, { params });
    }

    getAllTasksGrouped(cronograma) {
        let params = new HttpParams().set('project_id', cronograma);
        return this.httpClient.get(`${this.baseUrl}/project-task`, { params });
    }
}
