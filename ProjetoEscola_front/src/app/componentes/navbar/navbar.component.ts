import { AuthService } from './../../seguranca/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  constructor(private auth: AuthService) {
   }

   estaLogado(){
     return this.auth.jwtPayload != null;
   }
   pegarNome(){
     return this.auth.jwtPayload.user_name;
   }
}
