import { AlunoModel } from './../aluno.model';
import { AlunoService } from './../../../servicos/aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-aluno',
  templateUrl: './adicionar-aluno.component.html',
  styleUrls: ['./adicionar-aluno.component.scss']
})
export class AdicionarAlunoComponent implements OnInit {

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
  }


  adicionarAluno(aluno : AlunoModel){
    this.alunoService.adicionarAluno(aluno).then(() => null);
  }

}
