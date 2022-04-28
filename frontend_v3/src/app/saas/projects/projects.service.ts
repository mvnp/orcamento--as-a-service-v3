import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

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
}
