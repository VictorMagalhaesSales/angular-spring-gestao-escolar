import { environment } from './../../environments/environment.prod';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const auth = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlApi: string = environment.api;
  url = `${this.urlApi}/oauth/token`;
  jwtPayload: any;
  obj: any;


  constructor(private http: HttpClient, private rota: Router) {
    this.carregarToken();
   }

  login(usuario: string, senha: string): Promise<void>{
    const body = `username=${usuario}&password=${senha}&grant_type=password`;
    return this.http.post(this.url, body, { headers: { 'Authorization': 'Basic YW5ndWxhcjphbmd1bGFy==' }, withCredentials: true } )
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

    obterNovoAcessToken(): Promise<void>{
      const body = 'grant_type=refresh_token';

      return this.http.post(this.url, body, { headers: { 'Authorization': 'Basic YW5ndWxhcjphbmd1bGFy=='}, withCredentials: true })
        .toPromise()
        .then( res => {
          this.obj = res;
          this.armazenarToken(this.obj.access_token);
        })
        .catch(response =>{
          console.error('Erro ao renovar token.', response);
        });
    }

    isAcessTokenInvalid(){
      const token = localStorage.getItem('token');

      return !token || auth.isTokenExpired(token);
    }

    temPermissao(permissao: string){
      return this.jwtPayload.authorities.includes(permissao);
    }

    temQualquerPermissao(roles) {
      for (const role of roles) {
        if (this.temPermissao(role)) {
          return true;
        }
      }
    }
    
    estaLogado(){
      return this.jwtPayload != null;
    }

    limparAcessToken(){
      return this.http.delete(`${this.urlApi}/token/revoke`, { withCredentials: true })
      .toPromise()
      .then(() => {
        if(localStorage.getItem('token') != null){
          localStorage.removeItem('token');
          this.jwtPayload = null;
        }
      })
      .catch((res) => console.log(res));
     
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

    atualizarToken(){
      if (this.isAcessTokenInvalid()){
        this.obterNovoAcessToken();
      }
    }
}
