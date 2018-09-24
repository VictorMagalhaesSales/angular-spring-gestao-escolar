import { TextMaskModule } from 'angular2-text-mask';
import { AppRoutingModule } from './../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// MEUS COMPONENTES
import { AlunoService } from './../../servicos/aluno.service';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';
import { AdicionarAlunoComponent } from './adicionar-aluno/adicionar-aluno.component';
import { CalendarModule } from 'primeng/calendar';
import { PerfilAlunoComponent } from './perfil-aluno/perfil-aluno.component';

// PRIME NG
import { TableModule} from 'primeng/table';
import { ButtonModule} from 'primeng/button';
import { GrowlModule} from 'primeng/growl';
import { MessagesModule} from 'primeng/messages';
import { MessageModule} from 'primeng/message';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';

// MDB 
import { WavesModule, ButtonsModule, TooltipModule, ModalModule, InputsModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
      ListarAlunosComponent,
      AdicionarAlunoComponent,
      PerfilAlunoComponent
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
    ToastModule,
    MessagesModule,
    MessageModule,
    FileUploadModule
  ],
  exports: [
    ListarAlunosComponent
  ],
  providers: [AlunoService]
})
export class AlunoModule { }
