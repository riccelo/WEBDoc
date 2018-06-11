import { Component, OnInit } from '@angular/core';
import { Classe } from '../models/classe';
import { GerenteClasseService } from '../services/gerente-classe.service';
import { Variavel } from '../models/variavel';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DlgEscolherVariaveisComponent } from '../dlg-escolher-variaveis/dlg-escolher-variaveis.component'

@Component({
  selector: 'app-gerente-classe',
  templateUrl: './gerente-classe.component.html',
  styleUrls: ['./gerente-classe.component.css']
})
export class GerenteClasseComponent implements OnInit {

  constructor(
    private gerClasses:GerenteClasseService,
    private dlg:MatDialog
  ) { 
    this.selecionada = new Classe();
    this.carregarClasses();
    
  }

  ngOnInit() {    
  }

  selecionada:Classe;
  classes:Classe[];
  
  onDlgVariaveis(): void {
    let dialogRef = this.dlg.open(DlgEscolherVariaveisComponent, 
      {width: '600px', data: {selecionada: this.selecionada}}
    );
dialogRef.afterClosed().subscribe(
  r => this.selecionada.variaveis = r
  );
  }

  carregarClasses(): void {
    this.gerClasses.getClasses()
      .subscribe(c => this.classes = c);
  }

  onSelecionar(classe:Classe): void {
    this.selecionada = classe;
  }

  onSelVariavel(variavel:Variavel, e): void {
    console.log(variavel, e);
    if (this.selecionada.variaveis.find(v => v._id === variavel._id)){
      this.selecionada.variaveis.splice(this.selecionada.variaveis.indexOf(variavel), 1);
    } else {
      this.selecionada.variaveis.push(variavel);
    }
  }

  salvarClasse(e){
    e.preventDefault();
    
    if (!this.selecionada._id){    
      this.selecionada._id = (this.classes.length + 1) * -1;
      this.classes.push(this.selecionada);
    }

    this.gerClasses.saveClasse(this.selecionada).subscribe(
      r => this.selecionada.variaveis = r
    );

    this.selecionada = new Classe();
  }

  apagar(classe): void{
    this.gerClasses.apagar(classe).subscribe(
      r =>{ console.log(r); this.carregarClasses();}
    )
  }
}
