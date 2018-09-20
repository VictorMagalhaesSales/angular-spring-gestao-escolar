import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './../seguranca/auth.service';
import { AlunoModel, NotasModel, FaltasModel } from './../componentes/model';
import { AlunoFiltro } from './../componentes/aluno/aluno-filtro.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const auth = new JwtHelperService();


@Injectable({
  providedIn: 'root'
})
export class AlunoService{

  constructor(private http: HttpClient, private auth: AuthService, private rota: Router) {
  }

  pesquisarAlunos(filtro: AlunoFiltro): Promise<any>{
    if (this.auth.isAcessTokenInvalid()){
        this.auth.obterNovoAcessToken().then( () => { 
        if(filtro.nome == null){
          filtro.nome = "";
        }if(filtro.sobrenome == null){
            filtro.sobrenome = "";
        }if(filtro.email == null){
          filtro.email = "";
        }if(filtro.telefone == null){
          filtro.telefone = "";
        }

        return this.http.get("http://localhost:8080/aluno", {params: {"nome": filtro.nome, "sobrenome": filtro.sobrenome, "email": filtro.email, "telefone": filtro.telefone} })
            .toPromise()
            .then(response => response )
            .catch( response => {
              console.log(response);
              return Promise.reject("Você não tem autorização para operar esse conteúdo.");
            });
      });      
    }else{
      if(filtro.nome == null){
        filtro.nome = "";
      }if(filtro.sobrenome == null){
          filtro.sobrenome = "";
      }if(filtro.email == null){
        filtro.email = "";
      }if(filtro.telefone == null){
        filtro.telefone = "";
      }

      return this.http.get("http://localhost:8080/aluno", {params: {"nome": filtro.nome, "sobrenome": filtro.sobrenome, "email": filtro.email, "telefone": filtro.telefone} })
          .toPromise()
          .then(response => response )
          .catch( response => {
            console.log(response);
            return Promise.reject("Você não tem autorização para operar esse conteúdo.");
          });
    }
  }

  pesquisarAlunoPorId(matricula: number): Promise<any>{
    this.atualizarToken();
    
    return this.http.get(`http://localhost:8080/aluno/${matricula}`)
      .toPromise()
      .then(response => response)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }

  deletarAluno(matricula: number): Promise<void>{
    this.atualizarToken();
    
    return this.http.delete(`http://localhost:8080/aluno/${matricula}`)
      .toPromise()
      .then(() => null);
  }

  atualizarAluno(matricula: number, aluno: AlunoModel): Promise<any>{
    this.atualizarToken();
    
    return this.http.put(`http://localhost:8080/aluno/${matricula}`,aluno)
      .toPromise()
      .then(()=> null)
      .catch( response => {
         console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }

  adicionarAluno(aluno: AlunoModel): Promise<any>{
    this.atualizarToken();
    
    return this.http.post("http://localhost:8080/aluno", aluno)
      .toPromise()
      .then(al => al)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }

  pesquisarNotas(): Promise<any>{
    this.atualizarToken();
    
    return this.http.get("http://localhost:8080/notas")
      .toPromise()
      .then((al) => al)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }

  atualizarNotas(matricula: number, materia: string, nota: NotasModel): Promise<any>{
    this.atualizarToken();
    
    return this.http.put(`http://localhost:8080/notas/${matricula}/${materia}`,nota)
      .toPromise()
      .then(al => al)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }

  pesquisarFaltas(): Promise<any>{
    this.atualizarToken();

    return this.http.get("http://localhost:8080/faltas")
      .toPromise()
      .then((al) => al)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });

  }

  atualizarFaltas(matricula: number, materia: string, faltas: FaltasModel): Promise<any>{
    this.atualizarToken();
    
    return this.http.put(`http://localhost:8080/faltas/${matricula}/${materia}`,faltas)
      .toPromise()
      .then(al => al)
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
