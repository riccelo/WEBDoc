import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { ProjetosComponent } from '../projetos/projeto.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lastUpdateProjeto: Date;

  constructor() {
    this.lastUpdateProjeto = new Date();    
    //console.log("construtor chamado", this.lastUpdateProjeto)
   }

  ngOnInit() {
  }

  novoProjeto(): void{

  }

  atualizar(atualizado:boolean) {
    this.lastUpdateProjeto = new Date();
    //console.log("atualizar do dashboard chamado", this.lastUpdateProjeto)
  }
}
