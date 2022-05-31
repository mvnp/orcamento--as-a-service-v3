import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PhotosService {

    baseUrl = environment.productionUrl;

    constructor(private http: HttpClient) {}

    submitImages(files) 
    {
        const formData = new FormData();

        for (var i = 0; i < files.length; i++) { 
            formData.append("file[]", files[i]);
        }

        return this.http.post(`${this.baseUrl}/uploadImages`, formData);
    }
}
