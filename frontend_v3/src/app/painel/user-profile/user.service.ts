import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const HttpUploadOptions = {
  headers: new HttpHeaders({
    "Accept": "application/json",
    /*"Content-Type": "multipart/form-data",*/
    "Response-Type": "text"
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlPanel = environment.productionUrl;

  constructor(private httpClient: HttpClient) {}

  getLoggedCustomer(userSelected){
    return this.httpClient.get(`${this.urlPanel}/user/${userSelected}`)
  }

  updateLoggedUser(userSelected){
    if(userSelected.id == null){
      return this.httpClient.post(`${this.urlPanel}/user`, userSelected);
    } return this.httpClient.put(`${this.urlPanel}/user/${userSelected.id}`, userSelected);
  }

  updateLoggedUserPassword(userSelected){
    return this.httpClient.put(`${this.urlPanel}/reset-password/${userSelected.id}`, userSelected);
  }

  saveFotoPerfil(file, usuarioId) {

    let formData = new FormData();
    formData.append('id', usuarioId);
    formData.append('image', file, file.name);
    
    return this.httpClient.post(`${this.urlPanel}/partner-logo`, formData, HttpUploadOptions);
  }
}
