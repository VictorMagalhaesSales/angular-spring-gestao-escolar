import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// OUTROS
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './componentes/pagina-nao-encontrada/pagina-nao-encontrada.component';import { SegurancaModule } from './seguranca/seguranca.module';
import { AuthService } from './seguranca/auth.service';
import { AlunoModule } from './componentes/aluno/aluno.module';
import { AlunoService } from './servicos/aluno.service';
import { AppComponent } from './app.component';
import {ProfessorModule } from './componentes/professor/professor.module';
// MODEL FOR BOOTSTRAP
import { MDBBootstrapModule, NavbarModule, WavesModule, ButtonsModule, InputsModule, CardsFreeModule  } from 'angular-bootstrap-md';
// PRIME NG
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import {ToastModule} from 'primeng/toast';
import { AcessoNegadoComponent } from './componentes/acesso-negado/acesso-negado.component';
import { FooterComponent } from './componentes/footer/footer.component';

import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    AcessoNegadoComponent,
    FooterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule,
    TextMaskModule,
    // OUTROS
    AlunoModule,
    ProfessorModule,
    SegurancaModule,
   // MAATERIAL DESIGN FOR BOOTSTRAP - ANGULAR
    NavbarModule,
    WavesModule,
    ButtonsModule,
    InputsModule,
    CardsFreeModule,
    MDBBootstrapModule.forRoot(),

    // NG PRIME
    AccordionModule,
    TableModule,
    ToastModule
  ],
  providers: [AlunoService, AuthService, Title, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }