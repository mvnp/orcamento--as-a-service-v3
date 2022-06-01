import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PhotosService {

    baseUrl = environment.productionUrl;

    constructor(private http: HttpClient) {}

    submitImages(project_id, images) 
    {
        const formData = new FormData();

        formData.append("project_id", project_id);

        for (var i = 0; i < images.length; i++) {
            formData.append("images[]", images[i]);
        }

        return this.http.post(`${this.baseUrl}/project-gallery`, formData);
    }

    getProjectPhotos(id, limit, offset = null) {
        let params = new HttpParams().set('limit', limit).set('offset', offset);
        return this.http.get(`${this.baseUrl}/project-gallery/${id}`, { params });
    }
}
