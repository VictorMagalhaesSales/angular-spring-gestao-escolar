import { AlunoModule } from './componentes/aluno/aluno.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AlunoService } from './servicos/aluno.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';

import { MDBBootstrapModule, NavbarModule, WavesModule, ButtonsModule, InputsModule, CardsFreeModule  } from 'angular-bootstrap-md';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TesteComponent } from './teste/teste.component';

import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    InicioComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AlunoModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
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
  providers: [AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
