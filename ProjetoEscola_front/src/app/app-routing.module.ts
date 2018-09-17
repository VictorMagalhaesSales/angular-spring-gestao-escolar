import { LoginComponent } from './seguranca/login/login.component';
import { PaginaNaoEncontradaComponent } from './componentes/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { NotasEFaltasComponent } from './componentes/aluno/notas-e-faltas/notas-e-faltas.component';
import { AdicionarProfessorComponent } from './componentes/professor/adicionar-professor/adicionar-professor.component';
import { ListarProfessorComponent } from './componentes/professor/listar-professor/listar-professor.component';
import { AdicionarAlunoComponent } from './componentes/aluno/adicionar-aluno/adicionar-aluno.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ListarAlunosComponent } from './componentes/aluno/listar-alunos/listar-alunos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PerfilAlunoComponent } from './componentes/aluno/perfil-aluno/perfil-aluno.component';
import { PerfilProfessorComponent } from './componentes/professor/perfil-professor/perfil-professor.component';

const AppRoutes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'login', component: LoginComponent },
  { path: 'aluno/listaraluno', component: ListarAlunosComponent },
  { path: 'aluno/adicionaraluno', component: AdicionarAlunoComponent },
  { path: 'professor/listarprofessor', component: ListarProfessorComponent },
  { path: 'professor/adicionarprofessor', component: AdicionarProfessorComponent },
  { path: 'aluno/perfil', component: PerfilAlunoComponent },
  { path: 'professor/perfil', component: PerfilProfessorComponent },
  { path: 'notasfaltas', component: NotasEFaltasComponent},
  { path: '**', component: PaginaNaoEncontradaComponent }

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
