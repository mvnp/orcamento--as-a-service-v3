import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate 
{
    constructor(
        private router: Router, 
        private authService: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (!this.authService.isLoggedIn()) {
            console.log('unlogged!');
            let stateUrl = state.url;
            this.router.navigate(['auth/login'], { queryParams: {} });
        }
        
        return true;
    }
}