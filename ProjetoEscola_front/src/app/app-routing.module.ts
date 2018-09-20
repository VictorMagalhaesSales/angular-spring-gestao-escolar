import { AuthGuard } from './seguranca/auth.guard';
import { AcessoNegadoComponent } from './componentes/acesso-negado/acesso-negado.component';
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
  { path: '', component: InicioComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'aluno/listaraluno', component: ListarAlunosComponent , canActivate: [AuthGuard] },
  { path: 'aluno/adicionaraluno', component: AdicionarAlunoComponent , canActivate: [AuthGuard] },
  { path: 'professor/listarprofessor', component: ListarProfessorComponent , canActivate: [AuthGuard] },
  { path: 'professor/adicionarprofessor', component: AdicionarProfessorComponent , canActivate: [AuthGuard] },
  { path: 'aluno/perfil', component: PerfilAlunoComponent, canActivate: [AuthGuard]  },
  { path: 'professor/perfil', component: PerfilProfessorComponent, canActivate: [AuthGuard]  },
  { path: 'notasfaltas', component: NotasEFaltasComponent, canActivate: [AuthGuard] },
  { path: 'notasfaltas/:matricula', component: NotasEFaltasComponent, canActivate: [AuthGuard] },
  { path: 'acessonegado', component: AcessoNegadoComponent, canActivate: [AuthGuard] },
  { path: '**', component: PaginaNaoEncontradaComponent , canActivate: [AuthGuard] }

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
