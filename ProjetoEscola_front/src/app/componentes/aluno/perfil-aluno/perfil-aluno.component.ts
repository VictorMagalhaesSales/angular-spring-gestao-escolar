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
    this.chamarAluno(9);
  }

  chamarAluno(matricula: number){
    this.alunoService.pesquisarAlunoPorId(matricula).then( aluno => { this.aluno = aluno; } );
  }

  passarAluno(){
    let matricula = this.aluno.matricula;
    let sobrenome = this.aluno.sobrenome ;
    let nome = this.aluno.nome;
    let email = this.aluno.email;
    let senha = this.aluno.senha;
    let nascimento = this.aluno.nascimento;
    let telefone = this.aluno.telefone;
    this.passar2(matricula,nome,sobrenome,email,senha,nascimento,telefone);
  }

  passar2( matricula: number,  nome: string, sobrenome: string, email: string, senha: string, nascimento: string, telefone: string){
    this.alunoAtualizar.matricula = matricula;
    this.alunoAtualizar.nome = nome;
    this.alunoAtualizar.sobrenome = sobrenome;
    this.alunoAtualizar.email = email;
    this.alunoAtualizar.senha = senha;
    this.alunoAtualizar.nascimento = nascimento;
    this.alunoAtualizar.telefone = telefone;
  }
  
  editarAluno2(){
    this.alunoService.atualizarAluno(this.alunoAtualizar.matricula, this.alunoAtualizar).then( () => this.chamarAluno(this.aluno.matricula) );
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
