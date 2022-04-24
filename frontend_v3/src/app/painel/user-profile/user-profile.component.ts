import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TYPES } from 'src/app/saas/_interfaces/types';
import { NgxSpinnerService } from 'ngx-spinner';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';
import swal from 'sweetalert2';

import { UserService } from './user.service';
import { BudgetService } from './../budget/budget.service';

declare var $: any;

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @ViewChild('formTypeOfDocument') formTypeOfDocument: ElementRef;

  userLogged: any;

  logoForm: FormGroup;
  typeForm: FormGroup;
  userForm: FormGroup;
  passwordForm: FormGroup;

  submitted: boolean = false;
  submittedPass: boolean = false;

  hideFormTypePessoa: boolean = true;
  thisFormIsCPF: boolean = true; 
  thisFormIsCNPJ: boolean = false; 

  categoryOfPartners: any;
  fieldsIsCPF: boolean = true;
  
  fieldFantasia: string = "Nome";
  fieldRazao: string = "Sobrenome";
  fieldDocument: string = "CPF";

  picture;
  sendPicture = false;
  fotoUsuario: any = './assets/img/faces/user.jpg';
  businessOwner: string = 'SUAOBRA.COM.BR';
  businessWebsite = this.domSanitizer.bypassSecurityTrustResourceUrl('javascript:void(0)');
  businessDescription: string = 'Oferecendo a melhor qualidade em produtos e serviços sempre para melhorar a experiência dos nossos clientes cada vez mais!';

  API_SERVER: string = "http://localhost:8000/storage/uploads"

  types: TYPES[] = [
    { key: "", value: "Escolha", selected: true },
    { key: "CUST", value: "Cliente", selected: false },
    { key: "PART", value: "Parceiro", selected: false },
    { key: "BUILD", value: "Empreiteira", selected: false },
    { key: "ADMIN", value: "Administrador", selected: false }
  ];

  constructor(
    private fb: FormBuilder, 
    private _user: UserService,
    private _loader: NgxSpinnerService,
    private _budget: BudgetService,
    private domSanitizer: DomSanitizer
  ){
    this.typeForm = this.fb.group({
      typeFormSelected: ['']
    });

    this.passwordForm = this.fb.group({
      id: [null],
      password: ['', Validators.compose([
          Validators.required, 
          Validators.minLength(6)
      ])],
      compare_password: ['', Validators.required]
    });

    this.userForm = this.fb.group({
      id: [null],
      user_id: [null],
      website: [null],
      description: [null],
      email: ['', Validators.required],
      type: ['', Validators.required],
      type_business: ['', Validators.required],
      default_category_id: ['', Validators.required],
      corporate_name: ['', [Validators.required, Validators.minLength(6)]],
      unoficial_name: ['', [Validators.required, Validators.minLength(6)]],
      ein: ['', [Validators.required, Validators.minLength(11)]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      cellphone: ['', [Validators.required, Validators.minLength(10)]],
      enable: [true, Validators.required],
    });

    this.logoForm = this.fb.group({});

    this.getLoggedCustomer();
    this.getCategoryOfPartners();
  }

  ngOnInit(): void {
    var mainPanel = document.getElementsByClassName('main-panel')[0];
    $('.modal').on('shown.bs.modal', function () {
      mainPanel.classList.add('no-scroll');
    })
    $('.modal').on('hidden.bs.modal', function () {
      mainPanel.classList.remove('no-scroll');
    });
  }

  handleUserForm(){
    this.submitted = true;

    if(this.userForm.valid){
      this._loader.show();
      this._user.updateLoggedUser(this.userForm.value).subscribe(
        (userUpdated: any) => {
          swal.fire({
            title: "Successo", text: "Registro atualizado com sucesso!", 
            customClass:{ confirmButton: "btn btn-success" }, buttonsStyling: true,
            icon: "success"
          });
          this.getLoggedCustomer();
          this._loader.hide();
        }, (error: any) => {
          swal.fire({
            title: "Falha",
            text: "Não foi possível atualizar o registro. Tente novamente ou contacte o administrador.",
            customClass:{ confirmButton: "btn btn-danger" },
            buttonsStyling: true,
            icon: "error"
          });
          console.log(error);
          this._loader.hide();
        }
      );
    }
  }

  handlePasswordForm(){
    this.submittedPass = true;
    let pF = this.passwordForm.value;

    if(pF.password != pF.compare_password) {
      let message = "As senhas não conferem. Tente novamente inserir a mesma senha nos dois campos.";
      return this.showNotification(message, 'danger', 'top', 'right');
    }

    if(this.passwordForm.valid){
      this._loader.show();
      this._user.updateLoggedUserPassword(this.passwordForm.value).subscribe(
        (userUpdated: any) => {
          swal.fire({
            title: "Successo", text: "A senha foi atualizada com sucesso!", 
            customClass:{ confirmButton: "btn btn-success" }, 
            buttonsStyling: true, icon: "success"
          });

          this.resetForm(['password', 'compare_password']);
          this.submittedPass = false;
          this._loader.hide();
        }, (error: any) => {
          swal.fire({
            title: "Falha", text: "Não foi possível atualizar a senha. Tente novamente ou contacte o administrador.",
            customClass:{ confirmButton: "btn btn-danger" }, buttonsStyling: true, icon: "error"
          });
          console.log(error);
          this._loader.hide();
        }
      );
    }
  }

  getLoggedCustomer(){
    this._loader.show();
    this._user.getLoggedCustomer(1).subscribe(
      (response: any) => {
        this.userForm.patchValue({
          email: response.data.email ?? null,
          user_id: response.data.id ?? null,
          id: response.data?.partner?.id ?? null,
          website: response.data?.partner?.website ?? null,
          description: response.data?.partner?.description ?? null,
          type_business: response.data?.partner?.type_business ?? null,
          corporate_name: response.data?.partner?.corporate_name ?? null,
          unoficial_name: response.data?.partner?.unoficial_name ?? null,
          default_category_id: response.data?.partner?.default_category_id ?? null,
          phone: response.data?.partner?.phone ?? null,
          cellphone: response.data?.partner?.cellphone ?? null,
          type: response.data?.partner?.type ?? null,
          ein: response.data?.partner?.ein ?? null,
        });

        this.passwordForm.patchValue({
          id: response.data.id ?? null,
        });

        if(response.data.partner != null) {
          let document = response.data.partner.type_business;
          this.setTypeOfDocumentLoaded(document);
        }

        let desc = response.data.partner.description;
        let site = response.data.partner.website;

        this.businessOwner = response.data.name;
        this.businessDescription = ((this.isNulled(desc) == true) ? desc : this.businessDescription);
        this.businessWebsite = ((this.isNulled(site) == true) ? this.httpAdd(site) : this.businessWebsite);

        this.imageLoggedUser(response.data.partner);
        sessionStorage.setItem('usuario', JSON.stringify(response.data));
        this._loader.hide();
      }, (error: any) => {
        console.log(error);
        this._loader.hide();
      }
    );
  }

  imageLoggedUser(data){
    if(!data.image || data.image == null || data.image == undefined) {
      return this.fotoUsuario = './assets/img/faces/user.jpg';
    } this.fotoUsuario = `${this.API_SERVER}/${data.image}`;
  }

  setTypeOfDocumentLoaded(document){
    this.hideFormTypePessoa = false;

    if(document){
      if(document.toString() == "pessoa_fisica") {
        this.userForm.get('type_business').setValue('pessoa_fisica');
        this.fieldsIsCPF = true;
      } 

      if(document.toString() == "pessoa_juridica") {
        this.userForm.get('type_business').setValue('pessoa_juridica');
        this.fieldsIsCPF = false;
        this.fieldFantasia = "Razão social";
        this.fieldRazao = "Nome fantasia";
        this.fieldDocument = "CNPJ";  
      }
    }
  }

  setLabelsNameBasedUser(event){    
    this.hideFormTypePessoa = false;
    event.value == 'pessoa_juridica' ? (
      this.userForm.get('ein').setValidators([Validators.required, Validators.minLength(14)]),
      this.fieldFantasia = "Razão social",
      this.fieldRazao = "Nome fantasia",
      this.fieldDocument = "CNPJ",
      this.fieldsIsCPF = false
    ) : (
      this.userForm.get('ein').setValidators([Validators.required, Validators.minLength(11)]),
      this.fieldsIsCPF = true
    );

    this.userForm.get('ein').setValidators([Validators.required]);
    this.userForm.get('ein').updateValueAndValidity();
  }  

  getCategoryOfPartners(){
    this._loader.show();
    this._budget.getCategoryOfPartners().subscribe(
      (categories: any) => {
        this.categoryOfPartners = categories.data;
        this._loader.hide();
      }, (error: any) => {
        console.log(error);
        this._loader.hide();
      }
    );
  }

  showNotification(message: any, messageType: any, from: any, align: any){
    $.notify({
        icon: 'notifications',
        message: message
    }, {
        timer: 200,
        type: messageType,
        placement: { from: from, align: align },
        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">' +
          '<i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }

  resetForm(formFields: Array<any>): void {
    formFields.forEach(element => {
      this.passwordForm.get(element).reset();
      this.passwordForm.get(element).clearValidators();
      this.passwordForm.get(element).setErrors(null);
    });
  }

  onFileSelected(event) {
    let file = event.target.files[0];
    event.srcElement.value = null;
    if (file.size > 10485760) {
        this.docSizeExceeded();
    } else {
      this.picture = file;
      this.sendPicture = true;
      const reader = new FileReader();
      reader.onload = e => {
        this.fotoUsuario = this.domSanitizer.bypassSecurityTrustUrl(reader.result.toString());
      };
      reader.readAsDataURL(file);

      if (this.sendPicture) {
        this.sendFotoPerfil(this.picture);
      }
    }
  }

  docSizeExceeded() {
    swal.fire({
      title: "Falha", text: "A imagem enviada excede o tamanho máximo!", 
      customClass:{ confirmButton: "btn btn-danger" }, 
      buttonsStyling: true, icon: "error"
    });

    return false;
  }

  sendFotoPerfil(foto) {
    this._loader.show();
    let usuario = JSON.parse(sessionStorage.getItem('usuario'));
    
    if(usuario.partner.id) {
      let usuarioId = usuario.partner.id;
      this._user.saveFotoPerfil(foto, usuarioId).subscribe(
        (res: any) => {
          swal.fire({
            title: "Sucesso", text: res.success,
            customClass:{ confirmButton: "btn btn-success" }, 
            buttonsStyling: true, icon: "success"
          });
          this._loader.hide();
        },
        (err: HttpErrorResponse) => {
          swal.fire({
            title: "Falha", text: err.error.errors.image[0],
            customClass:{ confirmButton: "btn btn-danger" }, 
            buttonsStyling: true, icon: "error"
          });
          this._loader.hide();
          console.log(err);
        }
      )
    } else {
      swal.fire({
        title: "Falha", text: "Você precisa salvar primeiro o usuário!",
        customClass:{ confirmButton: "btn btn-danger" }, 
        buttonsStyling: true, icon: "error"
      });
    }
  }

  isNulled(dataInfo: string): boolean {
    if(dataInfo == '') { return false };
    if(dataInfo == null) { return false };
    if(dataInfo == undefined) { return false };

    return true;
  }

  httpAdd(dataInfo) {
    let error = 0;
    let newDatainfo = dataInfo;
    
    if(dataInfo.indexOf('http') == -1) { error++ }
    if(dataInfo.indexOf('https') == -1) { error++ }
    if(error > 0) { newDatainfo = `https://${dataInfo}`; }

    return newDatainfo;
  }  
}