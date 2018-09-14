import { AlunoModel } from './../../model';
import { AlunoService } from './../../../servicos/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-aluno',
  templateUrl: './adicionar-aluno.component.html',
  styleUrls: ['./adicionar-aluno.component.scss']
})
export class AdicionarAlunoComponent implements OnInit {

  aluno = new AlunoModel();

  constructor(private alunoService: AlunoService, private rota: Router) { }

  ngOnInit() {
  }

c
  adicionarAluno(){
    this.alunoService.adicionarAluno(this.aluno).then(() => this.rota.navigate(['../../aluno/listaraluno']));
  }

}
