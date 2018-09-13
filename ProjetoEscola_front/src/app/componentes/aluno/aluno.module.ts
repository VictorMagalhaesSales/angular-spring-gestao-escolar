import { AlunoService } from './../../servicos/aluno.service';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
      ListarAlunosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,


    // NG PRIME
    TableModule
  ],
  exports: [
    ListarAlunosComponent
  ],
  providers: [AlunoService]
})
export class AlunoModule { }
