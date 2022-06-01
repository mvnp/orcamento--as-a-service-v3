import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

    projectPhotos;
    productPicture;
    sendProductPicture: boolean = false;
    sourceImages = environment.sourceImages;

    limit: any;
    offset: any;

    constructor(
        private _loader: NgxSpinnerService,
        private _photosService: PhotosService,
    ){}

    ngOnInit(): void {
        this.limit = 12;
        this.offset = null;
        this.getProjectPhotos(this.limit, this.offset);
    }

    getProjectPhotos(limit, offset)
    {
        let project_id = 1;
        this._photosService.getProjectPhotos(project_id, limit, offset).subscribe({
            next: (photos: any) => {
                this.projectPhotos = this.setLinkToProject(photos.data);
                console.log(this.projectPhotos);
            },
            error: (error: any) => {
                console.log(error);
            },
            complete: () => {},
        });
    }

    setLinkToProject(photos) {
        let newsPhotos = [];
        photos.forEach((photo: any) => {
            photo.image = `${this.sourceImages}/${photo.image}`;
            photo.thumb = `${this.sourceImages}/${photo.thumb}`;
            newsPhotos.push(photo);
        });

        return newsPhotos;
    }

    uploadImageGallery(event) 
    {
        let photoFiles = []; 
        let project_id = 1; 

        for (var i = 0; i < event.target.files.length; i++) { 
            photoFiles.push(event.target.files[i]);
        }

        if(photoFiles.length > 0) {
            this._loader.show();
            this._photosService.submitImages(project_id, photoFiles).subscribe({
                next: (photos: any) => {
                    Swal.fire({
                        title: "Fotos salvas",
                        text: photos.data,
                        customClass:{ confirmButton: "btn btn-success" },
                        buttonsStyling: false, icon: "success",
                    });

                    this.getProjectPhotos(this.limit, this.offset);
                    this._loader.hide();
                }, 
                error: (error: any) => {
                    Swal.fire({
                        title: "Algo deu errado!",
                        text: "As fotos não foram enviadas. Tente novamente ou contacte o administrador do sistema.",
                        customClass:{ confirmButton: "btn btn-danger" },
                        buttonsStyling: false, icon: "error",
                    });

                    console.log(error);
                    this._loader.hide();
                }, 
                complete: ()  => {
                    console.log("complete!");
                }
            });
        }
    }

    docSizeExceeded() {
        Swal.fire({
            title: "Falha", text: "A imagem enviada excede o tamanho máximo!", 
            customClass:{ confirmButton: "btn btn-danger" }, 
            buttonsStyling: true, icon: "error"
        });
        
        return false;
    }
    
    loadMore(event) {
        return true;
    }

    answerProjetImage(event) {
        Swal.fire({
            title: "Algo deu errado!",
            text: "A foto não foi removida. Contacte o administrador do sistema.",
            customClass:{ confirmButton: "btn btn-danger" },
            buttonsStyling: false, icon: "error",
            confirmButtonText: 'Fechar'
        });
    }

    removeProjetImage(event) {
        Swal.fire({
            title: "Foto removida!",
            text: "A foto foi removida com sucesso do sistema.",
            customClass:{ confirmButton: "btn btn-success" },
            buttonsStyling: false, icon: "success",
        });
    }
}