import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

// Componentes e módulos criados
import { AppComponent } from './app.component';
import { AlunoModule } from './componentes/aluno/aluno.module';
import { ProfessorModule } from './componentes/professor/professor.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { SharedModule } from './componentes/shared/shared.module';
import { AlunoService } from './servicos/aluno.service';
import { AppRoutingModule } from './app-routing.module';

// MODEL FOR BOOTSTRAP
import { MDBBootstrapModule, WavesModule, ButtonsModule, InputsModule, CardsFreeModule, NavbarModule } from 'angular-bootstrap-md';

// PRIME NG
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { ProfessorService } from './servicos/professor.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    JwtModule,
    TextMaskModule,
    RouterModule,

    // MODULOS CRIADOS
    AlunoModule,
    ProfessorModule,
    SegurancaModule,
    SharedModule,
    AppRoutingModule,

   // MAATERIAL DESIGN FOR BOOTSTRAP - ANGULAR
    WavesModule,
    NavbarModule,
    ButtonsModule,
    InputsModule,
    CardsFreeModule,
    MDBBootstrapModule.forRoot(),

    // NG PRIME
    AccordionModule,
    TableModule,
    ToastModule
  ],
  providers: [AlunoService, ProfessorService, Title, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }