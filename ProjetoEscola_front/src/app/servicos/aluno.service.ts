import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './../seguranca/auth.service';
import { AlunoModel, NotasModel, FaltasModel } from './../componentes/model';
import { AlunoFiltro } from './../componentes/aluno/aluno-filtro.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const auth = new JwtHelperService();


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  token: string = "Bearer " + localStorage.getItem('token');

  constructor(private http: HttpClient, private auth: AuthService) {}


  pesquisarAlunos(filtro: AlunoFiltro): Promise<any>{

    if(filtro.nome == null){
      filtro.nome = "";
    }if(filtro.sobrenome == null){
        filtro.sobrenome = "";
    }if(filtro.email == null){
      filtro.email = "";
    }if(filtro.telefone == null){
      filtro.telefone = "";
    }

    return this.http.get("http://localhost:8080/aluno", {
      headers: { "Authorization": this.token}, 
      params: {"nome": filtro.nome, "sobrenome": filtro.sobrenome, "email": filtro.email, "telefone": filtro.telefone} })
        .toPromise()
        .then(response => response )
        .catch( response => {
          console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
        });
  }

  pesquisarAlunoPorId(matricula: number): Promise<any>{

    return this.http.get(`http://localhost:8080/aluno/${matricula}`, { headers: { "Authorization": this.token} } )
      .toPromise()
      .then(response => response)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }

  deletarAluno(matricula: number): Promise<void>{

    return this.http.delete(`http://localhost:8080/aluno/${matricula}`,{ headers: { "Authorization":  this.token}})
      .toPromise()
      .then(() => null)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");      
      });
  }

  atualizarAluno(matricula: number, aluno: AlunoModel): Promise<any>{

    return this.http.put(`http://localhost:8080/aluno/${matricula}`,aluno,{ headers: { "Authorization":  this.token}} )
      .toPromise()
      .then(()=> null)
      .catch( response => {
         console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }

  adicionarAluno(aluno: AlunoModel): Promise<any>{
    return this.http.post("http://localhost:8080/aluno", aluno, { headers: { "Authorization": this.token } } )
      .toPromise()
      .then(al => al)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }

  pesquisarNotas(): Promise<any>{
    return this.http.get("http://localhost:8080/notas", { headers: { "Authorization": this.token } } )
      .toPromise()
      .then((al) => al)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }

  atualizarNotas(matricula: number, materia: string, nota: NotasModel): Promise<any>{
    return this.http.put(`http://localhost:8080/notas/${matricula}/${materia}`,nota,{ headers: { "Authorization": this.token } } )
      .toPromise()
      .then(al => al)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }

  pesquisarFaltas(): Promise<any>{
    return this.http.get("http://localhost:8080/faltas", { headers: { "Authorization": this.token } } )
      .toPromise()
      .then((al) => al)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });

  }

  atualizarFaltas(matricula: number, materia: string, faltas: FaltasModel): Promise<any>{
    return this.http.put(`http://localhost:8080/faltas/${matricula}/${materia}`,faltas,{ headers: { "Authorization": this.token } } )
      .toPromise()
      .then(al => al)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }

  // ================================================================================================

 /* pesquisaAlunos2(filtro: AlunoFiltro): Promise<any>{
    if(auth.isTokenExpired(this.token)){
      console.log("Token inváldo! Validando um novo token");
      const chamadaNovoAccessToken = this.auth.obterNovoAcessToken()
        .then( () => {
          return this.pesquisarAlunos2(filtro);
        });
        return Observable.fromPromise(chamadaNovoAccessToken);
    }else{
      this.pesquisarAlunos2(filtro);
    }
  }*/
}
