import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Router } from '@angular/router';

import { GerenteProjetoService } from '../services/gerente-projeto.service';
import { Projeto } from '../models/projeto';
import { ProjetoProducao } from '../models/projetoProducao';

@Component({
  selector: 'app-projetos',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetosComponent implements OnInit, OnChanges {
  @Input() lastUpdate:Date;

  projetos: ProjetoProducao[];

  constructor(
    private gerProjeto: GerenteProjetoService,
    private router: Router
  ) { 
    this.lastUpdate = new Date();
  }

  ngOnInit() {
    //this.getProjects();
  }

  ngOnChanges(changes: SimpleChanges){
    //console.log("Atualizando projetos: ", changes['lastUpdate']);
    this.getProjects();
  }

  onSelect(projeto: Projeto): void {
    this.router.navigate(['projeto', projeto._id]);
  }

  getProjects(): void {
    this.gerProjeto.getProjetosProducao(true)
      .subscribe(projetos => this.projetos = projetos);
  }

  apagar(projeto:ProjetoProducao, e) {
    this.gerProjeto.apagarProjetoProducao(projeto)
      .subscribe((r) => {
        console.log(r);
        this.getProjects();
      });
  }
}
