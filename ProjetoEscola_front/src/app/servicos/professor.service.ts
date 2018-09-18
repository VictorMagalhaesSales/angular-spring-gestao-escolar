import { ProfessorModel } from './../componentes/model';
import { ProfessorFiltro } from './../componentes/professor/professor-filtro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  token: string = "Bearer " + localStorage.getItem('token');


  constructor(private http: HttpClient){
  }


  pesquisarProfessores(filtro: ProfessorFiltro): Promise<any>{

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
    return this.http.get("http://localhost:8080/professor", {
      headers: { "Authorization": this.token}, 
      params: {"nome": filtro.nome, "sobrenome": filtro.sobrenome, "disciplina": filtro.disciplina, "email": filtro.email, "telefone": filtro.telefone},
    })
          .toPromise()
          .then(response => response)
          .catch( response => {
            console.log(response);
              return Promise.reject("Você não tem autorização para operar esse conteúdo.");
          });
  }

  pesquisarProfessorPorId(id: number): Promise<any>{

    return this.http.get(`http://localhost:8080/professor/${id}`, { headers: { "Authorization": this.token} } )
          .toPromise()
          .then(response =>response)
          .catch( response => {
            console.log(response);
              return Promise.reject("Você não tem autorização para operar esse conteúdo."); 
          });
  }

  deletarProfessor(id: number): Promise<void>{

    return this.http.delete(`http://localhost:8080/professor/${id}`,{ headers: { "Authorization":  this.token}})
      .toPromise()
      .then(() => null)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }

  atualizarProfessor(id: number, professor: ProfessorModel): Promise<any>{

    return this.http.put(`http://localhost:8080/professor/${id}`,professor,{ headers: { "Authorization":  this.token}} )
      .toPromise()
      .then(()=> null)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo."); 
      });
  }

  adicionarProfessor(professor: ProfessorModel): Promise<any>{
    return this.http.post("http://localhost:8080/professor", professor, { headers: { "Authorization": this.token } } )
      .toPromise()
      .then(() => null)
      .catch( response => {
        console.log(response);
          return Promise.reject("Você não tem autorização para operar esse conteúdo.");
      });
  }
}
