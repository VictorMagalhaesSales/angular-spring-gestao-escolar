import { AlunoModel } from './../../model';
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../../servicos/aluno.service';

@Component({
  selector: 'app-perfil-aluno',
  templateUrl: './perfil-aluno.component.html',
  styleUrls: ['./perfil-aluno.component.scss']
})
export class PerfilAlunoComponent implements OnInit {

  aluno = new AlunoModel();

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.chamarAluno(28);
  }

  chamarAluno(matricula: number){
    this.alunoService.pesquisarAlunoPorId(matricula).then( aluno => this.aluno = aluno );
  }

}
