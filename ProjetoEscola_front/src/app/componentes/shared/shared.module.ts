import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MEUS COMPONENTES 
import { FooterComponent } from './footer/footer.component';
import { NotasEFaltasComponent } from './notas-e-faltas/notas-e-faltas.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';

// NG PRIME
import { DropdownModule } from 'primeng/dropdown';
import { MessageModule} from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { GrowlModule } from 'primeng/growl';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

// MDB
import { TooltipModule, ModalModule, NavbarModule, ButtonsModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
      AcessoNegadoComponent,
      FooterComponent,
      InicioComponent,
      NavbarComponent,
      NotasEFaltasComponent,
      PaginaNaoEncontradaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

    // MDB
    NavbarModule,
    ButtonModule,
    TooltipModule,
    ModalModule,
    GrowlModule,
    CalendarModule,
    ButtonsModule,

    // NG PRIME
    TableModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    ToastModule
  ],
  exports: [
    AcessoNegadoComponent,
    FooterComponent,
    InicioComponent,
    NavbarComponent,
    NotasEFaltasComponent,
    PaginaNaoEncontradaComponent
  ]
})
export class SharedModule { }
  