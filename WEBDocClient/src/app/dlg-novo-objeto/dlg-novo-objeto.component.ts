import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { GerenteObjetoService} from '../services/gerente-objeto.service';
import { GerenteClasseService} from '../services/gerente-classe.service';

import { Objeto } from '../models/objeto';
import { Classe } from '../models/classe';
import { Propriedade } from '../models/propriedade';
import { Pasta } from '../models/pasta';

@Component({
  selector: 'app-dlg-novo-objeto',
  templateUrl: './dlg-novo-objeto.component.html',
  styleUrls: ['./dlg-novo-objeto.component.css']
})
export class DlgNovoObjetoComponent implements OnInit {
  objeto: Objeto;

  constructor(
    private dialogRef: MatDialogRef<DlgNovoObjetoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private gerObjs: GerenteObjetoService,
    private gerClasses: GerenteClasseService
  ) {
      this.objeto = new Objeto();
      this.objeto.pasta = this.data.pasta;
      console.log("texto, precisa carregar");
      console.log(this.data, this.data.pasta.classes);
      for (let i=0; i<this.data.pasta.classes.length; i++){
        let cls = this.data.pasta.classes[i];
        console.log(cls);
        
        if (typeof cls === "string"){
          console.log("string")          ;
          this.gerClasses.getClasseById(cls).subscribe(
            novaCls => {
              console.log("novaCls", novaCls);
              this.data.pasta.classes[i] = novaCls;
            }
          );
        } else
        console.log("classe já carregada");
      };
    //}    
  }

  ngOnInit() {
  }

  selClasse(ev): void {
    console.log("classe selecionada:", ev.value);
    if ((this.objeto.propriedades) && (this.objeto.propriedades.length > 0))
      this.objeto.propriedades.splice(0, this.objeto.propriedades.length);

    ev.value.variaveis.forEach((val, idx, vars) => {
      let prop = new Propriedade();
      //prop._id= -1;
      prop.variavel= val;
      prop.valor= "";

      this.objeto.propriedades.push(prop);
    });
  }

  salvar():void {
    this.gerObjs.saveObjeto(this.objeto).subscribe( r => console.log(r));
    this.dialogRef.close();
  }

  cancelar():void{
    this.dialogRef.close();
  }
}
