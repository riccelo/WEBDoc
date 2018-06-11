import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterial } from './custom-material-module';

import { FileSelectDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { ProjetosComponent } from './projetos/projeto.component';
import { ProjetoInfoComponent } from './projeto-info/projeto-info.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './/routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FoldersTreeComponent } from './folders-tree/folders-tree.component';
import { GerenteVariavelComponent } from './gerente-variavel/gerente-variavel.component';
import { AdministracaoComponent } from './administracao/administracao.component';
import { AdministracaoMenuComponent } from './administracao-menu/administracao-menu.component';
import { GerenteClasseComponent } from './gerente-classe/gerente-classe.component';
import { DlgEscolherVariaveisComponent } from './dlg-escolher-variaveis/dlg-escolher-variaveis.component';
import { GerenteProjetoComponent } from './gerente-projeto/gerente-projeto.component';
import { DlgInputBoxComponent } from './dlg-input-box/dlg-input-box.component';
import { DlgPastaPropriedadesComponent } from './dlg-pasta-propriedades/dlg-pasta-propriedades.component';
import { DlgNovoProjetoComponent } from './dlg-novo-projeto/dlg-novo-projeto.component';
import { PastaViewComponent } from './pasta-view/pasta-view.component';
import { DlgNovoObjetoComponent } from './dlg-novo-objeto/dlg-novo-objeto.component';
import { PropriedadesEdicaoComponent } from './propriedades-edicao/propriedades-edicao.component';
import { PropriedadeEdicaoComponent } from './propriedade-edicao/propriedade-edicao.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetosComponent,
    ProjetoInfoComponent,
    ToolbarComponent,
    LoginComponent,
    DashboardComponent,
    FoldersTreeComponent,
    GerenteVariavelComponent,
    AdministracaoComponent,
    AdministracaoMenuComponent,
    GerenteClasseComponent,
    DlgEscolherVariaveisComponent,
    GerenteProjetoComponent,
    DlgInputBoxComponent,
    DlgPastaPropriedadesComponent,
    DlgNovoProjetoComponent,
    FileSelectDirective,
    PastaViewComponent,
    DlgNovoObjetoComponent,
    PropriedadesEdicaoComponent,
    PropriedadeEdicaoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterial,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DlgEscolherVariaveisComponent,
    DlgInputBoxComponent,
    DlgPastaPropriedadesComponent,
    DlgNovoProjetoComponent,
    DlgNovoObjetoComponent
  ]
})
export class AppModule { }
