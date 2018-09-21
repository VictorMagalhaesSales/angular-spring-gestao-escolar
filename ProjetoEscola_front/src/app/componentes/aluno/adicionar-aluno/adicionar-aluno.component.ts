import { MessageService } from 'primeng/components/common/messageservice';
import { AlunoModel } from './../../model';
import { AlunoService } from './../../../servicos/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Message } from 'primeng/components/common/message';

@Component({
  selector: 'app-adicionar-aluno',
  templateUrl: './adicionar-aluno.component.html',
  styleUrls: ['./adicionar-aluno.component.scss']
})
export class AdicionarAlunoComponent implements OnInit {


  uploadedFiles: any[] = [];

  mask: any[] = ['(', /[1-9]/, /\d/,')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  msgs: Message[] = [];
  
  aluno = new AlunoModel();


  
  constructor(private alunoService: AlunoService, private rota: Router, private title: Title, private messageService: MessageService) { }

  ngOnInit() {
    this.alunoService.atualizarToken();
    this.title.setTitle("Adicionar aluno");
  }


  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}

  adicionarAluno(){
    this.alunoService.adicionarAluno(this.aluno)
      .then(() => this.rota.navigate(['../../aluno/listaraluno']))
      .catch(erro => {
        this.messageService.add({severity:'error', summary: 'Erro de permissão', detail:'Você não tem permissão para operar esse conteúdo'});
      });
  }

  fecharAviso() {
    this.messageService.clear('c');
  }

}
