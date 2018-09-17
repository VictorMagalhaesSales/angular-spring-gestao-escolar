import { Title } from '@angular/platform-browser';
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

  constructor(private professorService: ProfessorService,private router: Router, private title: Title) { }

  ngOnInit() {
    this.chamarProfessor(2);
    this.title.setTitle("Meu perfil");
  }

  chamarProfessor(matricula: number){
    this.professorService.pesquisarProfessorPorId(matricula).then( professor => { this.professor = professor} );
  }

  passarProfessor(){
    let id = this.professor.id;
    let sobrenome = this.professor.sobrenome ;
    let nome = this.professor.nome;
    let email = this.professor.email;
    let senha = this.professor.senha;
    let nascimento = this.professor.nascimento;
    let telefone = this.professor.telefone;
    let disciplina = this.professor.disciplina;
    this.passar2(id,nome,sobrenome,email,senha,nascimento,telefone,disciplina);
  }

  passar2( id: number,  nome: string, sobrenome: string, email: string, senha: string, nascimento: string, telefone: string,disciplina: string){
    this.professorAtualizar.id = id;
    this.professorAtualizar.nome = nome;
    this.professorAtualizar.sobrenome = sobrenome;
    this.professorAtualizar.email = email;
    this.professorAtualizar.senha = senha;
    this.professorAtualizar.nascimento = nascimento;
    this.professorAtualizar.telefone = telefone;
    this.professorAtualizar.disciplina = disciplina;
  }
  
  editarProfessor2(){
    this.professorService.atualizarProfessor(this.professorAtualizar.id, this.professorAtualizar).then( () => this.chamarProfessor(this.professor.id) );
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
