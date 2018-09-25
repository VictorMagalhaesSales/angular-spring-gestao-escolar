import { AuthService } from './../../../seguranca/auth.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Title } from '@angular/platform-browser';
import { AlunoModel } from './../../model';
import { AlunoFiltro } from './../aluno-filtro.model';
import { AlunoService } from './../../../servicos/aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.component.html',
  styleUrls: ['./listar-alunos.component.scss']
})
export class ListarAlunosComponent implements OnInit {

  mask: any[] = ['(', /[1-9]/, /\d/,')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  nome: string;
  sobrenome: string;
  nascimento: string;
  email: string;
  telefone: string;
  paraExcluir: any;
  alunoAtualizar = new AlunoModel();
  listaDeAlunos = [];
  coluna: any[] = [
    { field: 'imagem', header: '' },
    { field: 'matricula', header: 'Matricula' },
    { field: 'nome', header: 'Nome' },
    { field: 'sobrenome', header: 'Sobrenome' },
    { field: 'nascimento', header: 'Nascimento' },
    { field: 'email', header: 'Email' },
    { field: 'telefone', header: 'Telefone' }
  ];

  constructor(private alunoService: AlunoService, private title: Title, private messageService: MessageService, private auth: AuthService) { }

  ngOnInit() {
    this.alunoService.atualizarToken();
    this.pesquisar("semFiltro");
    this.title.setTitle("Listar alunos");
  }

  pesquisar(iniciar: string){
    let filtro = new AlunoFiltro(this.nome, this.sobrenome, this.email, this.telefone);
    if(iniciar == "semFiltro" ){
      filtro.nome = "";
      filtro.sobrenome = "";
      filtro.email = "";
      filtro.telefone = "";
      this.alunoService.pesquisarAlunos(filtro)
        .then( alunos => this.listaDeAlunos = alunos.content)
        .catch(erro => {
          this.messageService.add({severity:'error', summary: 'Erro de permissão', detail:'Você não tem permissão para operar esse conteúdo'});
        });
    }else{
      this.alunoService.pesquisarAlunos(filtro)
        .then( alunos => this.listaDeAlunos = alunos.content)
        .catch(erro => {
          this.messageService.add({severity:'error', summary: 'Erro de permissão', detail:'Você não tem permissão para operar esse conteúdo'});
        });
    }
  }

  excluirAluno(){
    if(this.paraExcluir == null){
      console.log("Sem código");
    }else{
      this.alunoService.deletarAluno(this.paraExcluir)
        .then( () => {this.pesquisar("")} )
        .catch(erro => {
          this.messageService.add({severity:'error', summary: 'Erro de permissão', detail:'Você não tem permissão para operar esse conteúdo'});
        });
      this.paraExcluir = null;
    }
  }

  editarAluno(aluno: AlunoModel){
    this.alunoService.pesquisarAlunoPorId(aluno.matricula)
      .then( al => this.alunoAtualizar = al)
      .catch(erro => {
        this.messageService.add({severity:'error', summary: 'Erro de permissão', detail:'Você não tem permissão para operar esse conteúdo'});
      });
  }
  editarAlunoFinalizado(){
    this.alunoService.atualizarAluno(this.alunoAtualizar.matricula, this.alunoAtualizar)
      .then(()=> this.pesquisar(""))
      .catch(erro => {
        this.messageService.add({severity:'error', summary: 'Erro de permissão', detail:'Você não tem permissão para operar esse conteúdo'});
      });
  }

  acionarExcluir(aluno: AlunoModel){
    this.paraExcluir = aluno.matricula;
  }

  fecharAviso() {
    this.messageService.clear('c');
  }
  
  mostra(permissao: string){
    if(this.auth.jwtPayload != null){
      return this.auth.temPermissao(permissao);
    }
  }
}