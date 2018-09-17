import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const auth = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8080/oauth/token';
  jwtPayload: any;
  obj: any;


  constructor(private http: HttpClient, private rota: Router) {
    this.carregarToken();
   }

  login(usuario: string, senha: string): Promise<void>{

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.url, body, { headers: { 'Authorization': 'Basic YW5ndWxhcjphbmd1bGFy==', 'Content-Type': 'application/x-www-form-urlencoded' }  })
      .toPromise()
      .then( res => {
        this.obj = res;
        this.armazenarToken(this.obj.access_token);
      })
      .catch(response => {
        if(response.status === 400){
          if(response.error.error === 'invalid_grant'){
            return Promise.reject("Senha incorreta!");
          }
        }
        return Promise.reject(response);
      });

    }


    private armazenarToken(token: any){
      this.jwtPayload = auth.decodeToken(token);
      localStorage.setItem('token', token);
    }

    carregarToken(){
      let token = localStorage.getItem('token');
  
      if(token){
        this.armazenarToken(token);
      }
    }
}
