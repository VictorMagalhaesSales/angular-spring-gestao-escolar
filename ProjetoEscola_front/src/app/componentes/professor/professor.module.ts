import { TextMaskModule } from 'angular2-text-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// MEUS COMPONENTES E MÒDULOS
import { ListarProfessorComponent } from './listar-professor/listar-professor.component';
import { AdicionarProfessorComponent } from './adicionar-professor/adicionar-professor.component';
import { PerfilProfessorComponent } from './perfil-professor/perfil-professor.component';
import { AppRoutingModule } from './../../app-routing.module';

// PRIME NG
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MessageModule} from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { GrowlModule } from 'primeng/growl';
import { ButtonModule } from 'primeng/button';

// MDB
import { WavesModule, ButtonsModule, TooltipModule, ModalModule, InputsModule } from 'angular-bootstrap-md';

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
    TextMaskModule,
    
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
    DropdownModule,
    ToastModule,
    MessagesModule,
    MessageModule
  ],
  exports: [AdicionarProfessorComponent]
})
export class ProfessorModule { }
