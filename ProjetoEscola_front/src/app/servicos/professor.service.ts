import { environment } from './../../environments/environment';
import { AuthService } from './../seguranca/auth.service';
import { ProfessorModel } from './../componentes/model';
import { ProfessorFiltro } from './../componentes/professor/professor-filtro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService{

  url: string = environment.api;

  constructor(private http: HttpClient, private auth: AuthService){
  }

  pesquisarProfessores(filtro: ProfessorFiltro): Promise<any>{
    this.atualizarToken();

    if(filtro.nome == null){
      filtro.nome = "";
    }if(filtro.sobrenome == null){
      filtro.sobrenome = "";
    }if(filtro.disciplina == null){
      filtro.disciplina = "";
    }if(filtro.email == null){
      filtro.email = "";
    }if(filtro.telefone == null){
      filtro.telefone = "";
    }
    return this.http.get(`${this.url}/professor`, {params: {"nome": filtro.nome, "sobrenome": filtro.sobrenome, "disciplina": filtro.disciplina, "email": filtro.email, "telefone": filtro.telefone} })
          .toPromise()
          .then(response => response)
          .catch( response => {
            console.log(response);
              return Promise.reject("Você não tem autorização para operar esse conteúdo.");
          });
  }

  pesquisarProfessorPorId(id: number): Promise<any>{
    this.atualizarToken();

    return this.http.get(`${this.url}/professor/${id}`)
          .toPromise()
          .then(response =>response)
          .catch( response => {
            console.log(response);
              return Promise.reject("Você não tem autorização para operar esse conteúdo."); 
          });
  }

  deletarProfessor(id: number): Promise<void>{
    this.atualizarToken();

    return this.http.delete(`${this.url}/professor/${id}`)
      .toPromise()
      .then(() => null)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }

  atualizarProfessor(id: number, professor: ProfessorModel): Promise<any>{
    this.atualizarToken();

    return this.http.put(`${this.url}/professor/${id}`,professor)
      .toPromise()
      .then(()=> null)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo."); 
      });
  }

  atualizarProfessor2(id: number, professor: ProfessorModel): Promise<any>{
    this.atualizarToken();

    return this.http.put(`${this.url}/professor/senha/${id}`,professor)
      .toPromise()
      .then((res) => res)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo."); 
      });
  }

  adicionarProfessor(professor: ProfessorModel): Promise<any>{
    this.atualizarToken();
    return this.http.post(`${this.url}/professor`, professor)
      .toPromise()
      .then(() => null)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }

  atualizarToken(){
    if (this.auth.isAcessTokenInvalid()){
      this.auth.obterNovoAcessToken();
    }
  }
  
}
