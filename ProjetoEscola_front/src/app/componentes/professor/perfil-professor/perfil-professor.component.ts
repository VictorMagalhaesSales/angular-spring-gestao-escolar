import { ProfessorService } from './../../../servicos/professor.service';
import { Router } from '@angular/router';
import { ProfessorModel } from './../../model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-professor',
  templateUrl: './perfil-professor.component.html',
  styleUrls: ['./perfil-professor.component.scss']
})
export class PerfilProfessorComponent implements OnInit {

  professor = new ProfessorModel();
  professorAtualizar = new ProfessorModel();
  novaSenha: string;
  novaSenha2: string;

  constructor(private professorService: ProfessorService,private router: Router) { }

  ngOnInit() {
    this.chamarProfessor(2);
  }

  chamarProfessor(matricula: number){
    this.professorService.pesquisarProfessorPorId(matricula).then( professor => { this.professor = professor; this.professorAtualizar = professor; } );
  }

  
  editarProfessor2(){
    this.professorService.atualizarProfessor(this.professor.id, this.professorAtualizar).then( () => null );
    this.professor = this.professorAtualizar;
  }

  alterarSenha(){
    if(this.novaSenha == this.novaSenha2){
      this.professorAtualizar.senha = this.novaSenha;
      this.professor.senha = this.novaSenha;
      this.professorService.atualizarProfessor(this.professor.id, this.professorAtualizar).then(() => alert('deu certo'));
    }else{
      alert('As senhas não coincidem');
    }
  }

}
