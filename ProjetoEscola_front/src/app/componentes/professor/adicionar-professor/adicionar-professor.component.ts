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


  constructor(private professorService: ProfessorService, private rota: Router) { }

  ngOnInit() {
  }

  adicionarProfessor(){
    this.professorService.adicionarProfessor(this.professor).then(() => this.rota.navigate(['../../professor/listarprofessor']));
  }

}
