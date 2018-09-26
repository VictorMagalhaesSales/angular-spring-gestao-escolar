import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { AlunoModule } from './componentes/aluno/aluno.module';
import { ProfessorModule } from './componentes/professor/professor.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { SharedModule } from './componentes/shared/shared.module';
import { AlunoService } from './servicos/aluno.service';
import { AppRoutingModule } from './app-routing.module';
import { ProfessorService } from './servicos/professor.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AlunoModule,
    ProfessorModule,
    SegurancaModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [AlunoService, ProfessorService, Title, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
