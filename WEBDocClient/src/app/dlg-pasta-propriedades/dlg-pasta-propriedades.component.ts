import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { GerenteClasseService } from '../services/gerente-classe.service'
import { Classe } from '../models/classe';

@Component({
  selector: 'app-dlg-pasta-propriedades',
  templateUrl: './dlg-pasta-propriedades.component.html',
  styleUrls: ['./dlg-pasta-propriedades.component.css']
})
export class DlgPastaPropriedadesComponent implements OnInit {

  constructor(
    private gerClasse: GerenteClasseService,
    private dialogRef: MatDialogRef<DlgPastaPropriedadesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.gerClasse.getClasses().subscribe(
      classes => this.classes = classes
    )    
   }

  ngOnInit() {
  }
 
  classes:Classe[];

  isChecked(classe): any{
    if (this.data.pasta.classes){
      let clsIdx = this.data.pasta.classes.findIndex((c) => {
        if (c._id)
          return c._id === classe._id;
        else
          return c === classe._id;
      });
      //console.log(this.data, clsIdx);
      return clsIdx >= 0;
    } else {
      return false;
    }
  }

  selClasse(classe):void{
    if (!this.data.pasta.classes)
      this.data.pasta.classes = [];
    
      let clsIdx = this.data.pasta.classes.findIndex(c => c._id === classe._id);
      if (clsIdx >= 0 ){
        //precisa retirar a classe
        this.data.pasta.classes.splice(clsIdx, 1);
      } else {
        //precisa adicionar a classe
        this.data.pasta.classes.push(classe);
      }
  }

  sair(): void {
    this.dialogRef.close(this.data.pasta);
  }
}
