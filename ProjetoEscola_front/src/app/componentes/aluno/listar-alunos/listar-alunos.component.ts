import { AlunoModel } from './../aluno.model';
import { AlunoFiltro } from './../aluno-filtro.model';
import { AlunoService } from './../../../servicos/aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.component.html',
  styleUrls: ['./listar-alunos.component.scss']
})
export class ListarAlunosComponent implements OnInit {

  nome: string;
  sobrenome: string;
  nascimento: string;
  email: string;
  telefone: string;
  paraExcluir: any;

  alunoAtualizar = new AlunoModel();

  cars = [];

  coluna: any[] = [
    { field: 'matricula', header: 'Matricula' },
    { field: 'nome', header: 'Nome' },
    { field: 'sobrenome', header: 'Sobrenome' },
    { field: 'nascimento', header: 'Nascimento' },
    { field: 'email', header: 'Email' },
    { field: 'telefone', header: 'Telefone' }
];

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.pesquisar("a");
  }

  pesquisar(iniciar: string){
    let filtro = new AlunoFiltro(this.nome, this.sobrenome, this.email, this.telefone);
    
    if(iniciar == "a" ){
      filtro.nome = "";
      filtro.sobrenome = "";
      filtro.email = "";
      filtro.telefone = "";
      this.alunoService.pesquisarAlunos(filtro).then( alunos => this.cars = alunos.content );
    }else{
      this.alunoService.pesquisarAlunos(filtro).then( alunos => this.cars = alunos.content );
    }
  }

  excluirAluno(){
    if(this.paraExcluir == null){
      console.log("Sem código");
    }else{
      this.alunoService.deletarAluno(this.paraExcluir).then( () => {this.pesquisar("")}, () => {alert("Encontramos outros registros relacionados a esse usuário. Por favor, apague-os e tente novamente.")} );
      this.paraExcluir = null;
    }
  }

  editarAluno1(aluno: AlunoModel){
    this.alunoService.pesquisarAlunoPorId(aluno.matricula).then( al => this.alunoAtualizar = al);
  }
  editarAluno2(){
    this.alunoService.atualizarAluno(this.alunoAtualizar.matricula, this.alunoAtualizar).then(()=> this.pesquisar(""));
  }

  acionarExcluir(aluno: AlunoModel){
    this.paraExcluir = aluno.matricula;
  }

}
