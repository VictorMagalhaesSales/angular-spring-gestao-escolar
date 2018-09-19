import { AuthService } from './auth.service';
import { Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable()   
export class AuthInterceptor implements HttpInterceptor{

    constructor(private auth: AuthService){
    }

    intercept(req: HttpRequest<any>, next: HttpHandler,): Observable<HttpEvent<any>> {
        
        let token = 'Bearer ' + localStorage.getItem('token');

        if(req.headers.get('Authorization') == 'Basic YW5ndWxhcjphbmd1bGFy=='){
            return next.handle( req.clone( {headers: req.headers.set('Content-Type' , 'application/x-www-form-urlencoded') } ) )
        }
        const dupReq = req.clone({headers: req.headers.set('Authorization', `${token}`), });
        return next.handle(dupReq);
    }
}