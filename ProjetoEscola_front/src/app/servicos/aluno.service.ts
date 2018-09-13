import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient ) {}

  pesquisarAlunos(): Promise<any>{
return this.http.get("http://localhost:8080/aluno", { headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Mzk4NjE2MjQsInVzZXJfbmFtZSI6ImFkbUBhZG0uY29tIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9ERUxFVEFSX1BST0ZFU1NPUiIsIlJPTEVfREVMRVRBUl9OT1RBIiwiUk9MRV9MSVNUQVJfQUxVTk8iLCJST0xFX0xJU1RBUl9BTFVOT1MiLCJST0xFX0xJU1RBUl9QUk9GRVNTT1JFUyIsIlJPTEVfRURJVEFSX0FMVU5PIiwiUk9MRV9MSVNUQVJfUFJPRkVTU09SIiwiUk9MRV9MSVNUQVJfRkFMVEFTIiwiUk9MRV9TQUxWQVJfUFJPRkVTU09SIiwiUk9MRV9TQUxWQVJfQUxVTk8iLCJST0xFX0RFTEVUQVJfQUxVTk8iLCJST0xFX0xJU1RBUl9OT1RBUyIsIlJPTEVfREVMRVRBUl9GQUxUQSIsIlJPTEVfRURJVEFSX05PVEEiLCJST0xFX0VESVRBUl9QUk9GRVNTT1IiLCJST0xFX1NBTFZBUl9OT1RBIiwiUk9MRV9TQUxWQVJfRkFMVEEiXSwianRpIjoiMDJhMDQ4M2YtZDBmOS00Zjc3LWE4MTktZTAyNmY2MDBiODY3IiwiY2xpZW50X2lkIjoiYW5ndWxhciIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdfQ.wsnM1juHVI2p_f6PmVW5P8s8-RmnTgn7d2rNF7BIPYw"}})
      .toPromise()
      .then(response => {
        console.log( response );
      });
  }
}
