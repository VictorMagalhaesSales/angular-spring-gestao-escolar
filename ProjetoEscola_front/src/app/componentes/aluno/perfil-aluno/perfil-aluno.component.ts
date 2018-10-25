import { AlunoFiltro } from './../aluno-filtro.model';
import { MessageService } from 'primeng/components/common/messageservice';
import { Title } from '@angular/platform-browser';
import { AlunoModel, NotasModel } from './../../model';
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../../servicos/aluno.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../seguranca/auth.service';

@Component({
  selector: 'app-perfil-aluno',
  templateUrl: './perfil-aluno.component.html',
  styleUrls: ['./perfil-aluno.component.scss']
})
export class PerfilAlunoComponent implements OnInit {

  mask: any[] = ['(', /[1-9]/, /\d/,')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  aluno = new AlunoModel();
  alunoAtualizar = new AlunoModel();
  novaSenha: string;
  novaSenha2: string;

  imagemPerfil: string;

  profFIltro: AlunoFiltro = new AlunoFiltro(null,null,null,null);
  profEmail = [];
  profId: number;

  arrayNotas: Array<NotasModel> = new Array<NotasModel>();

  constructor(private alunoService: AlunoService,private router: Router, private title: Title, private messageService: MessageService, private auth: AuthService){ }

  ngOnInit() {
    this.alunoService.atualizarToken();
    this.carregarAlunoPorEmail();
    this.title.setTitle('Meu perfil');
    this.imagemPerfil = '../../../../assets/imgs/perfil/' + localStorage.getItem('imagemPerfil');
  }

  pegarNomeDaFoto(nome) {
    this.aluno.imagem = String(nome.xhr.response);
    this.alunoService.atualizarAluno(this.aluno.matricula, this.aluno)
        .then(() => {
          localStorage.setItem('imagemPerfil',  this.aluno.imagem);
          this.imagemPerfil = '../../../../assets/imgs/perfil/' + this.aluno.imagem;
        })
        .catch((res) => this.messageService.add({severity: 'error', summary: 'Erro de edição', detail: res}));
  }

  chamarAluno(matricula: number) {
    this.alunoService.pesquisarAlunoPorId(matricula).then( aluno => { this.aluno = aluno; } );
  }

  passarAluno() {
    let matricula = this.aluno.matricula;
    let sobrenome = this.aluno.sobrenome ;
    let nome = this.aluno.nome;
    let email = this.aluno.email;
    let senha = this.aluno.senha;
    let nascimento = this.aluno.nascimento;
    let telefone = this.aluno.telefone;
    this.passarAlunoContinuacao(matricula,nome,sobrenome,email,senha,nascimento,telefone);
  }

  passarAlunoContinuacao( matricula: number,  nome: string, sobrenome: string, email: string, senha: string, nascimento: string, telefone: string){
    this.alunoAtualizar.matricula = matricula;
    this.alunoAtualizar.nome = nome;
    this.alunoAtualizar.sobrenome = sobrenome;
    this.alunoAtualizar.email = email;
    this.alunoAtualizar.senha = senha;
    this.alunoAtualizar.nascimento = nascimento;
    this.alunoAtualizar.telefone = telefone;
  }

  editarAlunoNoModal(){
    this.alunoService.atualizarAluno(this.alunoAtualizar.matricula, this.alunoAtualizar)
    .then( () => this.chamarAluno(this.aluno.matricula))
    .catch(erro => {
      this.messageService.add({severity:'error', summary: 'Erro de edição', detail:'Ocorreu um erro ao editar o aluno'});
    });
  }

  alterarSenha(){
    if(this.novaSenha == this.novaSenha2){
      this.aluno.senha = this.novaSenha;
      this.alunoService.atualizarSenhaAluno(this.aluno.matricula, this.aluno)
      .then(() => this.messageService.add({severity:'success', summary: 'Atualização de senha', detail:'Senha atualizada com sucesso'}  ) )
      .catch(erro => {
        this.messageService.add({severity:'error', summary: 'Atualização de senha', detail:'Ocorreu um erro ao alterar a senha'});
      });
    }else{
      alert('As senhas não coincidem');
    }
  }

  pesquisarNotas(matricula: number){
    this.alunoService.pesquisarNotas()
    .then( (notas)  => {
      for(let n of notas){
        if(n.notasid.aluno == matricula){
          this.arrayNotas.push(n);
        }
      }
    })
    .catch(erro => {
      this.messageService.add({severity:'error', summary: 'Erro de permissão', detail:'Você não tem permissão para operar esse conteúdo'});
    });
  }

  fecharAviso() {
    this.messageService.clear('c');
  }

  carregarAlunoPorEmail(){
     this.alunoService.pesquisarAlunos(this.profFIltro).then( (profs) => {
       this.profEmail = profs.content;
       for (const aluno of this.profEmail) {
         if(aluno.email == this.auth.jwtPayload.user_name){
          this.chamarAluno(aluno.matricula);
          this.pesquisarNotas(aluno.matricula);
         }
       }
     }).catch( (erro) => console.log(erro));
   }

   antesDoUploadDaImagem(event) {
    event.xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));

  }

}
