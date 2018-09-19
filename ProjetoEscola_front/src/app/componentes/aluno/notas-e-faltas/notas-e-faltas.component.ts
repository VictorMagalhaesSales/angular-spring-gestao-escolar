import { ActivatedRoute } from '@angular/router';
import { AlunoFiltro } from './../aluno-filtro.model';
import { AuthService } from './../../../seguranca/auth.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Title } from '@angular/platform-browser';
import { NotasModel, FaltasModel } from './../../model';
import { AlunoService } from './../../../servicos/aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas-e-faltas',
  templateUrl: './notas-e-faltas.component.html',
  styleUrls: ['./notas-e-faltas.component.scss']
})
export class NotasEFaltasComponent implements OnInit {

  arrayNotas: Array<NotasModel> = new Array<NotasModel>();
  arrayNotasAt: Array<NotasModel> = new Array<NotasModel>();
  arrayFaltas: Array<FaltasModel> = new Array<FaltasModel>();
  arrayFaltasAt: Array<FaltasModel> = new Array<FaltasModel>();

  aparecidoNotas: boolean;
  aparecidoFaltas: boolean;

  profFIltro: AlunoFiltro = new AlunoFiltro(null,null,null,null);
  profEmail = [];
  profId: number;
  alunoIdUrl: number;

  constructor(private alunoService: AlunoService, private title: Title, private messageService: MessageService, private auth: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.alunoIdUrl = this.route.snapshot.params['matricula'];
    this.carregarAlunoPorEmail();
    this.title.setTitle("Notas e faltas");
  }

  
  // ==================================================================== Notas ====================================================================

  mudarApNotas(){
    this.aparecidoNotas = !this.aparecidoNotas;
  }

  pesquisarNotas(matricula: number){
    this.arrayNotas.length = 0;
    this.arrayNotasAt.length = 0;
    this.alunoService.pesquisarNotas().then( (notas)  => {
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

  passarNotas1(){
    let arrayNotas1: Array<NotasModel> = new Array<NotasModel>(); 
    for (let pas of this.arrayNotas) {
      arrayNotas1.push(pas);
    }

    this.passarNotas2(arrayNotas1);
    arrayNotas1.length = 0;
  }

  passarNotas2(notas: Array<NotasModel>){
    //his.arrayNotasAt = notas;
    for (let pas of notas) {
      this.arrayNotasAt.push(pas)
    }
    notas.length = 0;
  }

  editarNotas(){
    let ver: boolean = true;
    for (let notas of this.arrayNotasAt) {  
      if(notas.nota1 != null  && notas.nota2 != null && notas.nota3 != null && notas.nota4 != null){
        notas.media = (notas.nota1 + notas.nota2 + notas.nota3 + notas.nota4)/4;
      }else{
        notas
      }
    }

    for (let notas of this.arrayNotasAt) {
      this.alunoService.atualizarNotas(notas.notasid.aluno, notas.notasid.materia, notas).then(() => {
        if(ver){
          this.pesquisarNotas(notas.notasid.aluno);
          ver = false;
        }
      })
      .catch(erro => {
        this.messageService.add({severity:'error', summary: 'Erro de permissão', detail:'Você não tem permissão para operar esse conteúdo'});
      });
    }
  }

  // ==================================================================== Faltas ====================================================================

  mudarApFaltas(){
    this.aparecidoFaltas = !this.aparecidoFaltas;
  }

  pesquisarFaltas(matricula: number){
    this.arrayFaltas.length = 0;
    this.arrayFaltasAt.length = 0;
    this.alunoService.pesquisarFaltas().then( (faltas)  => {
      for(let n of faltas){
        if(n.faltasid.aluno == matricula){
          this.arrayFaltas.push(n);
        }
      }
    })
    .catch(erro => {
      this.messageService.add({severity:'error', summary: 'Erro de permissão', detail:'Você não tem permissão para operar esse conteúdo'});
    });
  }

  passarFaltas1(){
    let arrayFaltas1: Array<FaltasModel> = new Array<FaltasModel>(); 
    for (let pas of this.arrayFaltas) {
      arrayFaltas1.push(pas);
    }

    this.passarFaltas2(arrayFaltas1);
    arrayFaltas1.length = 0;
  }

  passarFaltas2(faltas: Array<FaltasModel>){
    //his.arrayFaltasAt = faltas;
    for (let pas of faltas) {
      this.arrayFaltasAt.push(pas)
    }
    faltas.length = 0;
  }

  editarFaltas(){
    let ver: boolean = true;
    for (let faltas of this.arrayFaltasAt) {
      this.alunoService.atualizarFaltas(faltas.faltasid.aluno , faltas.faltasid.materia, faltas).then(() => {
        if(ver){
          this.pesquisarFaltas(faltas.faltasid.aluno);
          ver = false;
        }
      })
      .catch(erro => {
        this.messageService.add({severity:'error', summary: 'Erro de permissão', detail:'Você não tem permissão para operar esse conteúdo'});
      });
    }
  }
  fecharAviso() {
    this.messageService.clear('c');
  }
  
  mostra(permissao: string){
    if(this.auth.jwtPayload != null){
      return this.auth.temPermissao(permissao);
    }
  }

  carregarAlunoPorEmail(){
    if(this.alunoIdUrl == 0 || this.alunoIdUrl == null ){
      this.alunoService.pesquisarAlunos(this.profFIltro).then( (profs) => {
        this.profEmail = profs.content;
        for (const ae of this.profEmail) {
          if(ae.email == this.auth.jwtPayload.user_name){
            this.pesquisarNotas(ae.matricula);  
            this.pesquisarFaltas(ae.matricula); 
          }
        }
      }).catch( (erro) => console.log(erro));
    }else{
      this.pesquisarNotas(this.alunoIdUrl);  
      this.pesquisarFaltas(this.alunoIdUrl); 
    }
  }

}
