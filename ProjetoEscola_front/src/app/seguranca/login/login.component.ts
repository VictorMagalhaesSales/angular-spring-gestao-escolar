import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{


  constructor(private auth: AuthService) {
  }

  login(usuario: string, senha: string){
    this.auth.login(usuario,senha);
  }


}
