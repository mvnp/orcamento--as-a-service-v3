import { first } from 'rxjs/operators';
import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from 'src/app/_helpers/auth.service';

declare var $: any;

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

    loginForm: FormGroup;
    submitted = false;
    returnUrl: string;

    test: Date = new Date();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;    

    constructor(
        private element: ElementRef,
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
    ){
        // Redirect to logged if already logged in
        if (this.authService.userValue) {
            this.router.navigate(['dashboard']);
        } else {
            this.nativeElement = element.nativeElement;
            this.sidebarVisible = false;
        }
    }

    ngOnInit() 
    {
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        const card = document.getElementsByClassName('card')[0];
        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);

        this.loginForm = this.formBuilder.group({
            email: ['financeiro@axitech.com.br', Validators.required],
            password: ['password', Validators.required],
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // Convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit()
    {
        this.submitted = true;
        console.log("start from login.component.ts ::: 0");

        // Stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.authService.login(this.f.email.value, this.f.password.value).pipe(first()).subscribe({
            next: () => {
                this.router.navigate([this.returnUrl]);
            },
            error: (error: any) => {
                // console.log("unauthorized from login.component.ts ::: X"); 
                console.log(error);
            }
        });

        // console.log(this.f.valid);
        // console.log(this.f.value);
        // this.router.navigateByUrl('logged');
    }

    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function() {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }    

    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        body.classList.remove('off-canvas-sidebar');
    } 
    
    isLoggedIn() {
        return true;
    }
}