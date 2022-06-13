import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService
{
    private userSubject: BehaviorSubject<any>;
    public user: Observable<any>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private http: HttpClient
    ) {
        console.log("AuthService");
        this.userSubject = new BehaviorSubject<any>(null);
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }

    login(email: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/login`, { email, password }, { withCredentials: true })
            .pipe(map(user => {
                console.log("success login in auth.service.ts ::: 2");
                console.log("Userdata logged in auth.service.ts ::: 3", user);
                console.log("redirecionando ::: 3.1", user);

                this.userSubject.next(user);
                this.startRefreshTokenTimer();
                this.router.navigate(['dashboard']);

                return user;
            })
        );
    }

    logout() {
        this.http.post<any>(`${environment.apiUrl}/logout`, {}, { withCredentials: true }).subscribe();
        this.stopRefreshTokenTimer();
        this.userSubject.next(null);
        this.router.navigate(['/auth/login']);
    }

    refreshToken() {
        return this.http.post<any>(`${environment.apiUrl}/refresh-token`, {}, { withCredentials: true })
            .pipe(map((user) => {
                this.userSubject.next(user);
                this.startRefreshTokenTimer();
                return user;
            })
        );
    }

    // helper methods
    private refreshTokenTimeout: any;

    private startRefreshTokenTimer() {
        // Parse Json Object from base64 encoded jwt token
        // set a timeout to refresh the token a minute before it expires
        const jwtToken = JSON.parse(atob(this.userValue.jwtToken.split('.')[1]));
        const expires = new Date(jwtToken.exp * 1000);
        const timeout = expires.getTime() - Date.now() - (60 * 1000);
        console.log("expires", expires);
        console.log("timeout", timeout);

        return this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
}

/** login() */
// console.log("success login in auth.service.ts ::: 2");
// console.log("Userdata logged in auth.service.ts ::: 3", user);
// console.log("redirecionando ::: 3.1", user);
// console.log(this.router.navigate(['dashboard']));
/** startRefreshTokenTimer() */
// console.log("expires", expires);
// console.log("timeout", timeout);