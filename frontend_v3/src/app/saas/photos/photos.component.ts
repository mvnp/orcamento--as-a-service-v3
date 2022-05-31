import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

import Swal from 'sweetalert2';

@Component({
    selector: 'app-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

    productPicture;
    sendProductPicture: boolean = false;

    constructor(private _photosService: PhotosService) { }

    ngOnInit(): void {}

    uploadImageGallery(event) 
    {
        let photoFiles = []; 

        for (var i = 0; i < event.target.files.length; i++) { 
            photoFiles.push(event.target.files[i]);
        }

        return this._photosService.submitImages(photoFiles).subscribe({
            next: (reponse: any) => {
                console.log(reponse);
            }, error: (error: any) => {
                console.log(error);
            }, complete: ()  => {
                console.log("complete");
            }
        });
    }

    docSizeExceeded() {
        Swal.fire({
            title: "Falha", text: "A imagem enviada excede o tamanho máximo!", 
            customClass:{ confirmButton: "btn btn-danger" }, 
            buttonsStyling: true, icon: "error"
        });
        
        return false;
    }    
}