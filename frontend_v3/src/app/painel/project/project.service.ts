import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  postData(body) {
    return this.httpClient.post(`http://localhost:8000/api/admin/projects`, body);
  }
}
