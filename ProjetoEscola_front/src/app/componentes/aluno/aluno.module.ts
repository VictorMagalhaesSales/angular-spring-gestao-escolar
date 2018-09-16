import { AppRoutingModule } from './../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {TableModule} from 'primeng/table';
import { WavesModule, ButtonsModule, TooltipModule, ModalModule, InputsModule } from 'angular-bootstrap-md';
import {ButtonModule} from 'primeng/button';
import {GrowlModule} from 'primeng/growl';

import { AlunoService } from './../../servicos/aluno.service';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';
import { AdicionarAlunoComponent } from './adicionar-aluno/adicionar-aluno.component';
import {CalendarModule} from 'primeng/calendar';
import { InicioComponent } from '../inicio/inicio.component';
import { PerfilAlunoComponent } from './perfil-aluno/perfil-aluno.component';
import { NotasEFaltasComponent } from './notas-e-faltas/notas-e-faltas.component';

@NgModule({
  declarations: [
      ListarAlunosComponent,
      AdicionarAlunoComponent,
      InicioComponent,
      PerfilAlunoComponent,
      NotasEFaltasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,

    // MDB
    WavesModule,
    ButtonsModule,
    ButtonModule,
    TooltipModule,
    ModalModule,
    GrowlModule,
    CalendarModule,

    // NG PRIME
    TableModule,
    InputsModule
  ],
  exports: [
    ListarAlunosComponent
  ],
  providers: [AlunoService]
})
export class AlunoModule { }
