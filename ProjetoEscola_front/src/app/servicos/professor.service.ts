import { ProfessorModel } from './../componentes/model';
import { ProfessorFiltro } from './../componentes/professor/professor-filtro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  token: string = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Mzk5NDU4ODUsInVzZXJfbmFtZSI6ImFkbUBhZG0uY29tIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9ERUxFVEFSX1BST0ZFU1NPUiIsIlJPTEVfREVMRVRBUl9OT1RBIiwiUk9MRV9MSVNUQVJfQUxVTk8iLCJST0xFX0xJU1RBUl9BTFVOT1MiLCJST0xFX0xJU1RBUl9QUk9GRVNTT1JFUyIsIlJPTEVfRURJVEFSX0FMVU5PIiwiUk9MRV9MSVNUQVJfUFJPRkVTU09SIiwiUk9MRV9MSVNUQVJfRkFMVEFTIiwiUk9MRV9TQUxWQVJfUFJPRkVTU09SIiwiUk9MRV9TQUxWQVJfQUxVTk8iLCJST0xFX0RFTEVUQVJfQUxVTk8iLCJST0xFX0xJU1RBUl9OT1RBUyIsIlJPTEVfREVMRVRBUl9GQUxUQSIsIlJPTEVfRURJVEFSX05PVEEiLCJST0xFX0VESVRBUl9QUk9GRVNTT1IiLCJST0xFX1NBTFZBUl9OT1RBIiwiUk9MRV9TQUxWQVJfRkFMVEEiXSwianRpIjoiYzJiOTk1OTMtNjAxNS00YTRhLWFlYTgtM2MyNzJkYTE2ZWZkIiwiY2xpZW50X2lkIjoiYW5ndWxhciIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdfQ.hZtI5k3BBHwr4GF3a5ZPvetC95TS68mi02wuUx_txxQ";

  constructor(private http: HttpClient ) {}


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
    console.log("1");
    return this.http.get("http://localhost:8080/professor", {
      headers: { "Authorization": this.token}, 
      params: {"nome": filtro.nome, "sobrenome": filtro.sobrenome, "disciplina": filtro.disciplina, "email": filtro.email, "telefone": filtro.telefone},
    })
          .toPromise()
          .then(response => response );
  }

  pesquisarProfessorPorId(id: number): Promise<any>{

    return this.http.get(`http://localhost:8080/professor/${id}`, { headers: { "Authorization": this.token} } )
          .toPromise()
          .then(response =>response  );
  }

  deletarProfessor(id: number): Promise<void>{

    return this.http.delete(`http://localhost:8080/professor/${id}`,{ headers: { "Authorization":  this.token}})
      .toPromise()
      .then(() => null);
  }

  atualizarProfessor(id: number, professor: ProfessorModel): Promise<any>{

    return this.http.put(`http://localhost:8080/professor/${id}`,professor,{ headers: { "Authorization":  this.token}} )
      .toPromise()
      .then(()=> null);
  }

  adicionarProfessor(professor: ProfessorModel): Promise<any>{
    return this.http.post("http://localhost:8080/professor", professor, { headers: { "Authorization": this.token } } )
      .toPromise()
      .then(al => al)
  }
}
