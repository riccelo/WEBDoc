import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjetoInfoComponent } from './projeto-info/projeto-info.component';
import { GerenteVariavelComponent } from './gerente-variavel/gerente-variavel.component';
import { AdministracaoComponent } from './administracao/administracao.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "projeto/:id", component: ProjetoInfoComponent},
  {path: "variaveis", component: GerenteVariavelComponent},
  {path: "administracao", component: AdministracaoComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class RoutingModule { }
