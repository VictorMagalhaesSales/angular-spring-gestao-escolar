import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { GrowlModule } from 'primeng/growl';
import { ButtonModule } from 'primeng/button';
import { WavesModule, ButtonsModule, TooltipModule, ModalModule, InputsModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListarProfessorComponent } from './listar-professor/listar-professor.component';
import { AdicionarProfessorComponent } from './adicionar-professor/adicionar-professor.component';
import { PerfilProfessorComponent } from './perfil-professor/perfil-professor.component';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    AdicionarProfessorComponent,
    ListarProfessorComponent,
    PerfilProfessorComponent
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
    InputsModule,
    DropdownModule
  ],
  exports: [AdicionarProfessorComponent]
})
export class ProfessorModule { }
