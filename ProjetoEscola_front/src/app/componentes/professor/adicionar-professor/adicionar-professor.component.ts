import { MessageService } from 'primeng/components/common/messageservice';
import { Title } from '@angular/platform-browser';
import { ProfessorService } from './../../../servicos/professor.service';
import { ProfessorModel } from './../../model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-professor',
  templateUrl: './adicionar-professor.component.html',
  styleUrls: ['./adicionar-professor.component.scss']
})
export class AdicionarProfessorComponent implements OnInit {

  professor = new ProfessorModel();
  disciplina: Disciplina[];

  mask: any[] = ['(', /[1-9]/, /\d/,')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  disci: Disciplina;


  constructor(private professorService: ProfessorService, private rota: Router, private title: Title, private messageService: MessageService) {
  this.disciplina = [
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
    this.title.setTitle("Adicionar professor");
  }

  adicionarProfessor(){
    this.professor.disciplina = this.disci.nome;
    this.professorService.adicionarProfessor(this.professor)
      .then(() => this.rota.navigate(['../../professor/listarprofessor']))
      .catch(erro => {
        this.messageService.add({severity:'error', summary: 'Erro de permissão', detail:'Você não tem permissão para operar esse conteúdo'});
      });
  }

  fecharAviso() {
    this.messageService.clear('c');
  }

}

export interface Disciplina{
  nome: string;
}
