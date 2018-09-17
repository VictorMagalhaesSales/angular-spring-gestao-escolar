import { Title } from '@angular/platform-browser';
import { Disciplina } from './../adicionar-professor/adicionar-professor.component';
import { ProfessorFiltro } from './../professor-filtro.model';
import { ProfessorService } from './../../../servicos/professor.service';
import { ProfessorModel } from './../../model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-professor',
  templateUrl: './listar-professor.component.html',
  styleUrls: ['./listar-professor.component.scss']
})
export class ListarProfessorComponent implements OnInit {

  nome: string;
  sobrenome: string;
  nascimento: string;
  disciplina: string;
  email: string;
  telefone: string;
  paraExcluir: any;

  professor = new ProfessorModel();
  disciplinaM: Disciplina[];

  disci: Disciplina;

  professorAtualizar = new ProfessorModel();

  cars = [];

  coluna: any[] = [
    { field: 'id', header: 'id' },
    { field: 'nome', header: 'Nome' },
    { field: 'sobrenome', header: 'Sobrenome' },
    { field: 'disciplina', header: 'Disciplina' },
    { field: 'nascimento', header: 'Nascimento' },
    { field: 'email', header: 'Email' },
    { field: 'telefone', header: 'Telefone' }
];

  constructor(private professorService: ProfessorService, private title: Title) {
    this.disciplinaM = [
      {nome: 'Java'},
      {nome: 'PHP'},
      {nome: 'JavaScript'},
      {nome: 'C++'},
      {nome: 'Angular'},
      {nome: 'Spring'},
      {nome: 'TypeScript'},
      {nome: 'React'},
      {nome: 'MySql'}
  ];
   }

  ngOnInit() {
    this.pesquisar("a");
    this.title.setTitle("Listar professores");
  }

  pesquisar(iniciar: string){
    let filtro = new ProfessorFiltro(this.nome, this.sobrenome, this.disciplina, this.email, this.telefone);
    
    if(iniciar == "a" ){
      filtro.nome = "";
      filtro.sobrenome = "";
      filtro.email = "";
      filtro.telefone = "";
      filtro.disciplina = "";
      this.professorService.pesquisarProfessores(filtro).then( professores => this.cars = professores );
    }else{
      this.professorService.pesquisarProfessores(filtro).then( professores => this.cars = professores );
    }
  }

  excluirProfessor(){
    if(this.paraExcluir == null){
      console.log("Sem código");
    }else{
      this.professorService.deletarProfessor(this.paraExcluir).then( () => {this.pesquisar("")}, () => {alert("Encontramos outros registros relacionados a esse professor. Por favor, apague-os e tente novamente.")} );
      this.paraExcluir = null;
    }
  }

  editarProfessor1(professor: ProfessorModel){
    this.professorService.pesquisarProfessorPorId(professor.id).then( al => this.professorAtualizar = al);
  }
  editarProfessor2(){
    this.professorAtualizar.disciplina = this.disci.nome;
    this.professorService.atualizarProfessor(this.professorAtualizar.id, this.professorAtualizar).then(()=> this.pesquisar(""));
  }

  acionarExcluir(professor: ProfessorModel){
    this.paraExcluir = professor.id;
  }

}
