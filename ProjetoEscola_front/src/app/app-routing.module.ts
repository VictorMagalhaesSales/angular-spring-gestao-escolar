import { TesteComponent } from './teste/teste.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ListarAlunosComponent } from './componentes/aluno/listar-alunos/listar-alunos.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const AppRoutes: Routes = [
  { path: '', component: InicioComponent} ,
  { path: 'login', component: LoginComponent },
  { path: 'listaralunos', component: ListarAlunosComponent },
  { path: 'teste', component: TesteComponent }

]

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(AppRoutes)]
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
