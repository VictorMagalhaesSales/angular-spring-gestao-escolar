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

   escondeADM(permissao: string){ 
     if(this.auth.jwtPayload != null){
      return this.auth.temPermissao(permissao) && this.auth.jwtPayload.user_name != "adm@adm.com";
     }
     
   }
   mostra(permissao: string){
    if(this.auth.jwtPayload != null){
      return this.auth.temPermissao(permissao);
    }
  }

  isProfessor(){
    return this.auth.temPermissao('ROLE_SALVAR_PROFESSOR');
  }
}
