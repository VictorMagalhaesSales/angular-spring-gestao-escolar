import { environment } from './../../environments/environment.prod';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './../seguranca/auth.service';
import { AlunoModel, NotasModel, FaltasModel } from './../componentes/model';
import { AlunoFiltro } from './../componentes/aluno/aluno-filtro.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

const auth = new JwtHelperService();


@Injectable({
  providedIn: 'root'
})
export class AlunoService{

  url: string = environment.api;

  constructor(private http: HttpClient, private auth: AuthService, private rota: Router) {
  }


  pesquisarAlunos(filtro: AlunoFiltro): Promise<any>{
    if (this.auth.isAcessTokenInvalid()){
      this.auth.obterNovoAcessToken()
        .then(() => { 
          return this.buscarAlunoRequest(filtro);
        });      
    }else{
      return this.buscarAlunoRequest(filtro);
    }
  }

  private buscarAlunoRequest(filtro: AlunoFiltro): Promise<any> {
    let params = new HttpParams();
    if(this.isValidValue(filtro.email)) {
      params = params.append("email", filtro.email);
    }
    if(this.isValidValue(filtro.nome)) {
      params = params.append("nome", filtro.nome);
    }
    if(this.isValidValue(filtro.sobrenome)) {
      params = params.append("sobrenome", filtro.sobrenome);
    }
    if(this.isValidValue(filtro.telefone)) {
      params = params.append("telefone", filtro.telefone);
    }
    return this.http.get(`${this.url}/aluno`, {params})
      .toPromise()
      .then(response => response )
      .catch( response => {
        console.log(response);
        return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }

  pesquisarAlunoPorId(matricula: number): Promise<any>{
    this.atualizarToken();
    
    return this.http.get(`${this.url}/aluno/${matricula}`)
      .toPromise()
      .then(response => response)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }

  deletarAluno(matricula: number): Promise<void>{
    this.atualizarToken();
    
    return this.http.delete(`${this.url}/aluno/${matricula}`)
      .toPromise()
      .then(() => null);
  }

  atualizarAluno(matricula: number, aluno: AlunoModel): Promise<any>{
    this.atualizarToken();
    
    return this.http.put(`${this.url}/aluno/${matricula}`,aluno)
      .toPromise()
      .then(()=> null)
      .catch( response => {
         console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }

  atualizarSenhaAluno(matricula: number, aluno: AlunoModel): Promise<any>{
    this.atualizarToken();
    
    return this.http.put(`${this.url}/aluno/senha/${matricula}`,aluno)
      .toPromise()
      .then(()=> null)
      .catch( response => {
         console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }

  adicionarAluno(aluno: AlunoModel): Promise<any>{
    this.atualizarToken();
    
    return this.http.post(`${this.url}/aluno`, aluno)
      .toPromise()
      .then(al => al)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }

  pesquisarNotas(): Promise<any>{
    this.atualizarToken();
    
    return this.http.get(`${this.url}/notas`)
      .toPromise()
      .then((al) => al)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }

  atualizarNotas(matricula: number, materia: string, nota: NotasModel): Promise<any>{
    this.atualizarToken();
    
    return this.http.put(`${this.url}/notas/${matricula}/${materia}`,nota)
      .toPromise()
      .then(al => al)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }

  pesquisarFaltas(): Promise<any>{
    this.atualizarToken();

    return this.http.get(`${this.url}/faltas`)
      .toPromise()
      .then((al) => al)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });

  }

  atualizarFaltas(matricula: number, materia: string, faltas: FaltasModel): Promise<any>{
    this.atualizarToken();
    
    return this.http.put(`${this.url}/faltas/${matricula}/${materia}`,faltas)
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

  private isValidValue(value: string): boolean {
    return value != null && value != "" && value != undefined;
  }

}
