import { AuthService } from './../../../seguranca/auth.service';
import { Component, OnChanges, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {

  imagemPerfil: string;
  
  constructor(private auth: AuthService, private rota: Router) {
   }

   ngOnInit() {
     let imagem = localStorage.getItem('imagemPerfil');
     if(imagem != null) this.imagemPerfil = "../../../../assets/imgs/perfil/" + imagem;
     else this.imagemPerfil = "../../../../assets/imgs/perfil/padrao.png";
     console.log(imagem);
     console.log(this.imagemPerfil);
   }

   ngDoCheck(){
    let imagem = localStorage.getItem('imagemPerfil');
    if(imagem != null) this.imagemPerfil = "../../../../assets/imgs/perfil/" + imagem;
    else this.imagemPerfil = "../../../../assets/imgs/perfil/padrao.png";
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

  logout(){
    this.auth.limparAcessToken()
      .then(() => {
        this.rota.navigate(['login']);
        localStorage.removeItem('imagemPerfil');
      })
      .catch(() => null);
  }
}
