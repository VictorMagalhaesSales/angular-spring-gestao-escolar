import { AcessoNegadoComponent } from './componentes/shared/acesso-negado/acesso-negado.component';
import { AuthGuard } from './seguranca/auth.guard';
import { LoginComponent } from './seguranca/login/login.component';
import { PaginaNaoEncontradaComponent } from './componentes/shared/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { NotasEFaltasComponent } from './componentes/shared/notas-e-faltas/notas-e-faltas.component';
import { AdicionarProfessorComponent } from './componentes/professor/adicionar-professor/adicionar-professor.component';
import { ListarProfessorComponent } from './componentes/professor/listar-professor/listar-professor.component';
import { AdicionarAlunoComponent } from './componentes/aluno/adicionar-aluno/adicionar-aluno.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ListarAlunosComponent } from './componentes/aluno/listar-alunos/listar-alunos.component';
import { InicioComponent } from './componentes/shared/inicio/inicio.component';
import { PerfilAlunoComponent } from './componentes/aluno/perfil-aluno/perfil-aluno.component';
import { PerfilProfessorComponent } from './componentes/professor/perfil-professor/perfil-professor.component';

const AppRoutes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'login', component: LoginComponent},
  { path: 'aluno/listaraluno', component: ListarAlunosComponent,
  canActivate: [AuthGuard], data: { roles: ['ROLE_LISTAR_ALUNOS'] }  },
  { path: 'aluno/adicionaraluno', component: AdicionarAlunoComponent,
  canActivate: [AuthGuard], data: { roles: ['ROLE_SALVAR_ALUNO'] } },
  { path: 'professor/listarprofessor', component: ListarProfessorComponent,
  canActivate: [AuthGuard], data: { roles: ['ROLE_LISTAR_PROFESSORES'] } },
  { path: 'professor/adicionarprofessor', component: AdicionarProfessorComponent,
  canActivate: [AuthGuard], data: { roles: ['ROLE_SALVAR_PROFESSOR'] } },
  { path: 'aluno/perfil', component: PerfilAlunoComponent,
  canActivate: [AuthGuard], data: { roles: ['ROLE_LISTAR_ALUNO'] }},
  { path: 'professor/perfil', component: PerfilProfessorComponent,
  canActivate: [AuthGuard], data: { roles: ['ROLE_LISTAR_PROFESSOR'] } },
  { path: 'notasfaltas', component: NotasEFaltasComponent,
  canActivate: [AuthGuard], data: { roles: ['ROLE_LISTAR_NOTAS','ROLE_LISTAR_FALTAS'] } },
  { path: 'notasfaltas/:matricula', component: NotasEFaltasComponent,
  canActivate: [AuthGuard], data: { roles: ['ROLE_LISTAR_NOTAS','ROLE_LISTAR_FALTAS'] } },
  { path: 'acessonegado', component: AcessoNegadoComponent},
  { path: '**', component: PaginaNaoEncontradaComponent}

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
