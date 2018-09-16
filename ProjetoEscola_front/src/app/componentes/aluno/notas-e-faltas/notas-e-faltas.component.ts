import { NotasModel } from './../../model';
import { AlunoService } from './../../../servicos/aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas-e-faltas',
  templateUrl: './notas-e-faltas.component.html',
  styleUrls: ['./notas-e-faltas.component.scss']
})
export class NotasEFaltasComponent implements OnInit {

  notas: NotasModel = new NotasModel();
  arrayNotas: Array<NotasModel> = new Array<NotasModel>();
  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.pesquisarNotas(1);  
  }b   

  pesquisarNotas(matricula: number){
    this.alunoService.pesquisarNotas().then( (notas)  => {
      for(let n of notas){
        if(n.notasid.aluno == matricula){
          this.arrayNotas.push(n);
        }
      }
      console.log(this.arrayNotas);
    } );
  }

}
