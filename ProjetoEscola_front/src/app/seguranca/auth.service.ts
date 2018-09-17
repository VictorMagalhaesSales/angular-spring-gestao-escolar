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


  constructor(private http: HttpClient) {
   }

  login(usuario: string, senha: string): Promise<void>{

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.url, body, { headers: { 'Authorization': 'Basic YW5ndWxhcjphbmd1bGFy==', 'Content-Type': 'application/x-www-form-urlencoded' }  })
      .toPromise()
      .then( res => {
        console.log(res);
      })
      .catch(res2 => {
        console.log(res2);
      });

    }


    private armazenarToken(token: string){
      this.jwtPayload = auth.decodeToken(token);
    }
}

export class token {
  id,
}
