import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Variavel } from '../models/variavel';
import { GerenteVariavelService } from '../services/gerente-variavel.service';
import { Classe } from '../models/classe';

class VariavelSel extends Variavel {
  checked:boolean;
}

@Component({
  selector: 'app-dlg-escolher-variaveis',
  templateUrl: './dlg-escolher-variaveis.component.html',
  styleUrls: ['./dlg-escolher-variaveis.component.css']
})
export class DlgEscolherVariaveisComponent implements OnInit {

  constructor(
    public gerVariavel:GerenteVariavelService,
    private dialogRef: MatDialogRef<DlgEscolherVariaveisComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 

      this.variaveis = new Array<VariavelSel>();
      this.variaveisClasse = new Array<VariavelSel>();

      this.gerVariavel.getVariaveis()
      .subscribe(v => {
        v.forEach(v1 => {
          if (!data.selecionada.variaveis.find(v3 => v3._id === v1._id)){
            var v2 = this.copyVarValor(v1);
            this.variaveis.push(v2);
          }
        })
      });      

      if (data.selecionada && data.selecionada.variaveis) {
        data.selecionada.variaveis.forEach(
          v1 => {
            var v2 = this.copyVarValor(v1);
            this.variaveisClasse.push(v2);
          }
        );
      }
    }

  ngOnInit() {
  }

  copyVarValor(v1):any {
    var v2 : VariavelSel;
        v2 = new VariavelSel();
        v2._id = v1._id;
        v2.nome = v1.nome;
        v2.obrigatorio = v1.obrigatorio;
        v2.somenteLeitura = v1.somenteLeitura;
        v2.tipo = v1.tipo;
        v2.valorPadrao = v1.valorPadrao;
        v2.checked = false;
    return v2;
  }

  variaveis:VariavelSel[];
  variaveisClasse:VariavelSel[];

  onAdicionarVariavel(): void {
    this.variaveis.forEach((v) => {
      if (v.checked){
        //adiciona a variavel na classe
        this.variaveisClasse.push(v);
      }
    })
    this.variaveis = this.variaveis.filter(v => !v.checked);
    this.variaveisClasse.forEach( v => v.checked = false);
  }

  onRemoverVariavel(): void {
    this.variaveisClasse.forEach((v) => {
      if (v.checked) {
        //adiciona na lista geral
        this.variaveis.push(v);
      };
      this.variaveisClasse = this.variaveisClasse.filter(v => !v.checked);
      this.variaveis.forEach( v => v.checked = false);      
    });    
  }

  selVar(v): void {
    v.checked = !v.checked
  }

  sair(): void {
    this.dialogRef.close(this.variaveisClasse);
  }
}
