import { AuthService } from './../../seguranca/auth.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  estaLogado: boolean;

  constructor(private title: Title, private auth: AuthService) { }

  ngOnInit() {
    this.isLogado();
    this.title.setTitle("Escola FullStack");
  }

  isLogado(){
    if(localStorage.getItem('token') != null){
      this.estaLogado = true;
    }
  }

  pegarNome(){
    return this.auth.jwtPayload.user_name;
  }

}
