import { AlunoModel } from './../../model';
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../../servicos/aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-aluno',
  templateUrl: './perfil-aluno.component.html',
  styleUrls: ['./perfil-aluno.component.scss']
})
export class PerfilAlunoComponent implements OnInit {

  aluno = new AlunoModel();
  alunoAtualizar = new OutroModel();
  novaSenha: string;
  novaSenha2: string;

  constructor(private alunoService: AlunoService,private router: Router) { }

  ngOnInit() {
    this.chamarAluno(2);
  }

  chamarAluno(matricula: number){
    this.alunoService.pesquisarAlunoPorId(matricula).then( aluno => { this.aluno = aluno; this.alunoAtualizar = aluno; } );
  }

  
  editarAluno2(){
    this.alunoService.atualizarAluno(this.aluno.matricula, this.alunoAtualizar).then( () => null );
    this.aluno = this.alunoAtualizar;
  }

  alterarSenha(){
    if(this.novaSenha == this.novaSenha2){
      this.alunoAtualizar.senha = this.novaSenha;
      this.aluno.senha = this.novaSenha;
      this.alunoService.atualizarAluno(this.aluno.matricula, this.alunoAtualizar).then(() => alert('deu certo'));
    }else{
      alert('As senhas não coincidem');
    }
  }

}




export class OutroModel {
  matricula: number;
  nome: string;
  sobrenome: string;
  senha: string;
  nascimento: string;
  email: string;
  telefone: string;
  image: string;
  permissoes = [
    {
        codigo: 2,
        descricao: "ROLE_LISTAR_ALUNO"
    },
    {
        codigo: 5,
        descricao: "ROLE_EDITAR_ALUNO"
    },
    {
        codigo: 6,
        descricao: "ROLE_LISTAR_FALTAS"
    },
    {
        codigo: 9,
        descricao: "ROLE_LISTAR_NOTAS"
    },
    {
        codigo: 13,
        descricao: "ROLE_LISTAR_PROFESSORES"
    }
  ]   
}
