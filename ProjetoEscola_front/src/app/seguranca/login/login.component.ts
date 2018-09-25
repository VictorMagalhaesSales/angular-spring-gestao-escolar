import { ProfessorFiltro } from './../../componentes/professor/professor-filtro.model';
import { AlunoModel, ProfessorModel } from './../../componentes/model';
import { AlunoFiltro } from './../../componentes/aluno/aluno-filtro.model';
import { AlunoService } from './../../servicos/aluno.service';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';
import { ProfessorService } from '../../servicos/professor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{


  constructor(private auth: AuthService, private messageService: MessageService, private rota: Router, private alunoService: AlunoService, private professorService: ProfessorService) {
  }

  login(usuario: string, senha: string){
    let filtro = new AlunoFiltro("","","","");
    let filtro2 = new ProfessorFiltro("","","","","");
    let aluno: AlunoModel;
    let professor: ProfessorModel;
    this.auth.login(usuario,senha)
      .then(() => {

        this.alunoService.pesquisarAlunos(filtro).then((res) => {
          for(aluno of res.content){
            if(aluno.email == usuario){
              localStorage.setItem('imagemPerfil', aluno.imagem);
            }
          }
          this.rota.navigate(['']);
        }).catch((err) => alert(err));

        this.professorService.pesquisarProfessores(filtro2).then((res) => {
          for(professor of res){
            if(professor.email == usuario){
              localStorage.setItem('imagemPerfil', professor.imagem);
            }
          }
          this.rota.navigate(['']);
        }).catch((err) => alert(err));

        
      })
      .catch(erro => {
        this.messageService.add({severity:'error', summary: 'Erro de login', detail:'Usuário e/ou senha incorreto(s)'});
      });
  }
  
  fecharAviso() {
    this.messageService.clear('c');
  }
}
