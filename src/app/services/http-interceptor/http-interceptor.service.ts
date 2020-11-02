import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AuthService} from '../auth-service/auth.service';

@Injectable({
    providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
    constructor(private AuthService: AuthService, private router: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.indexOf('login') === -1) {
            if (this.AuthService.isUserLogined()) {
                const authReq = req.clone({
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    })
                });
                return next.handle(authReq);
            } else {
                this.router.navigate(['/session/login']);
            }
        }
        return next.handle(req);
    }
}
