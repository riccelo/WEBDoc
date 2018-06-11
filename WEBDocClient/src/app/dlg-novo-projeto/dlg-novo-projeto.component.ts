import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { GerenteProjetoService } from '../services/gerente-projeto.service'
import { ProjetoProducao } from '../models/projetoProducao'
import { Projeto } from '../models/projeto'
import { Pasta } from '../models/pasta';

@Component({
  selector: 'app-dlg-novo-projeto',
  templateUrl: './dlg-novo-projeto.component.html',
  styleUrls: ['./dlg-novo-projeto.component.css']
})
export class DlgNovoProjetoComponent implements OnInit {

  projetosModelos:Projeto[];
  projetoModelo:Projeto;
  projeto:ProjetoProducao;

  constructor(
    private gerProjetos:GerenteProjetoService,
    private dialogRef: MatDialogRef<DlgNovoProjetoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      
      this.gerProjetos.getProjetos().subscribe(
        projetosModelos => this.projetosModelos = projetosModelos
      );

      this.projeto = new ProjetoProducao();
      this.projeto._id = -1;
    }

  ngOnInit() {
  }

  async apagarPastaId(pasta:Pasta) {
    if (pasta.subPastas && pasta.subPastas.length > 0){
      var i:number;
      for (i=0; i<pasta.subPastas.length; i++)
        await this.apagarPastaId(pasta.subPastas[i]);        
    }
    pasta._id = undefined;
  }

  async copiarEstrutura(pasta:Pasta){
    await this.apagarPastaId(pasta);

    return pasta;
  }

  salvar(): void{
    // this.copiarEstrutura(this.projetoModelo.pastaRaiz)
    //   .then((pasta) => this.projeto.pastaRaiz = pasta);
    this.projeto.pastaRaiz = this.projetoModelo.pastaRaiz;
    this.gerProjetos.salvarProjetoProducao(this.projeto).subscribe(
      proj => console.log(proj)
    );
  }

  cancelar(): void{
   
  }
}
