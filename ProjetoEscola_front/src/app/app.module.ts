import { JwtHelperService, JwtModule, JWT_OPTIONS, JwtModuleOptions } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AlunoService } from './servicos/aluno.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { MDBBootstrapModule, NavbarModule, WavesModule, ButtonsModule, InputsModule, CardsFreeModule  } from 'angular-bootstrap-md';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './componentes/pagina-nao-encontrada/pagina-nao-encontrada.component';import { SegurancaModule } from './seguranca/seguranca.module';
import { AuthService } from './seguranca/auth.service';
import { AlunoModule } from './componentes/aluno/aluno.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import { ProfessorModule } from './componentes/professor/professor.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AlunoModule,
    SegurancaModule,
    BrowserAnimationsModule,
    ProfessorModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    JwtModule,


   // MAATERIAL DESIGN FOR BOOTSTRAP - ANGULAR
    NavbarModule,
    WavesModule,
    ButtonsModule,
    InputsModule,
    CardsFreeModule,
    MDBBootstrapModule.forRoot(),

    // NG PRIME
    AccordionModule
  ],
  providers: [AlunoService, AuthService, Title, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }