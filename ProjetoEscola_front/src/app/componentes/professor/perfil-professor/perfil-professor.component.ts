import { AuthService } from './../../../seguranca/auth.service';
import { ProfessorFiltro } from './../professor-filtro.model';
import { MessageService } from 'primeng/components/common/messageservice';
import { Title } from '@angular/platform-browser';
import { ProfessorService } from './../../../servicos/professor.service';
import { Router } from '@angular/router';
import { ProfessorModel } from './../../model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-professor',
  templateUrl: './perfil-professor.component.html',
  styleUrls: ['./perfil-professor.component.scss']
})
export class PerfilProfessorComponent implements OnInit {

  
  mask: any[] = ['(', /[1-9]/, /\d/,')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  professor = new ProfessorModel();
  professorAtualizar = new ProfessorModel();
  novaSenha: string;
  novaSenha2: string;

  profFIltro: ProfessorFiltro = new ProfessorFiltro(null,null,null,null,null);
  profEmail = [];
  profId: number;

  constructor(private professorService: ProfessorService,private router: Router, private title: Title, private messageService: MessageService, private auth: AuthService) { }

  ngOnInit() {
    this.carregarProfessorPorEmail();
    this.title.setTitle("Meu perfil");
  }

  chamarProfessor(matricula: number){
    this.professorService.pesquisarProfessorPorId(matricula).then( professor => { this.professor = professor} );
  }

  passarProfessor(){
    let id = this.professor.id;
    let sobrenome = this.professor.sobrenome ;
    let nome = this.professor.nome;
    let email = this.professor.email;
    let senha = this.professor.senha;
    let nascimento = this.professor.nascimento;
    let telefone = this.professor.telefone;
    let disciplina = this.professor.disciplina;
    this.passar2(id,nome,sobrenome,email,senha,nascimento,telefone,disciplina);
  }

  passar2( id: number,  nome: string, sobrenome: string, email: string, senha: string, nascimento: string, telefone: string,disciplina: string){
    this.professorAtualizar.id = id;
    this.professorAtualizar.nome = nome;
    this.professorAtualizar.sobrenome = sobrenome;
    this.professorAtualizar.email = email;
    this.professorAtualizar.senha = senha;
    this.professorAtualizar.nascimento = nascimento;
    this.professorAtualizar.telefone = telefone;
    this.professorAtualizar.disciplina = disciplina;
  }
  
  editarProfessor2(){
    this.professorService.atualizarProfessor(this.professorAtualizar.id, this.professorAtualizar)
      .then( () => this.chamarProfessor(this.professor.id))
      .catch(erro => {
        this.messageService.add({severity:'error', summary: 'Erro de permissão', detail:'Você não tem permissão para operar esse conteúdo'});
      });
  }

  alterarSenha(){
    if(this.novaSenha == this.novaSenha2){
      this.professor.senha = this.novaSenha;
      this.professorService.atualizarProfessor2(this.professor.id, this.professor)
        .then((res) => {
          let r: ProfessorModel = res;
          this.professorAtualizar = r;
          this.professor = r;
          this.messageService.add({severity:'success', summary: 'Atualização de senha', detail:'Senha atualizada com sucesso'});
        })
        .catch(erro => {
          this.messageService.add({severity:'error', summary: 'Atualização de senha', detail:'Ocorreu um erro ao alterar a senha'});
        });
    }else{
      this.messageService.add({severity:'error', summary: 'Atualização de senha', detail:'As senhas digitadas não coincidem'});
    }
  }

  fecharAviso() {
    this.messageService.clear('c');
  }

  carregarProfessorPorEmail(){
   // let filtro = new ProfessorFiltro(this.nome, this.sobrenome, this.disciplina, this.email, this.telefone);
    this.professorService.pesquisarProfessores(this.profFIltro).then( (profs) => {
      this.profEmail = profs;
      for (const ae of this.profEmail) {
        if(ae.email == this.auth.jwtPayload.user_name){
          this.chamarProfessor(ae.id);
        }
      }
    }).catch( (erro) => console.log(erro));
    
    
  }

}
