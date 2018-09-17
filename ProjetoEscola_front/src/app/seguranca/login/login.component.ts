import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{


  constructor(private auth: AuthService, private messageService: MessageService, private rota: Router) {
  }

  login(usuario: string, senha: string){
    this.auth.login(usuario,senha)
      .then(() => this.rota.navigate(['']))
      .catch(erro => {
        this.messageService.add({severity:'error', summary: 'Erro de login', detail:'Usuário e/ou senha incorreto(s)'});
      });
  }
  
  fecharAviso() {
    this.messageService.clear('c');
  }


}
