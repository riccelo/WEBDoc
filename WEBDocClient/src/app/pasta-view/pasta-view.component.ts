import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DlgNovoObjetoComponent } from '../dlg-novo-objeto/dlg-novo-objeto.component'

import { GerenteObjetoService } from '../services/gerente-objeto.service';

import {Pasta} from '../models/pasta';
import {Objeto} from '../models/objeto';

@Component({
  selector: 'app-pasta-view',
  templateUrl: './pasta-view.component.html',
  styleUrls: ['./pasta-view.component.css']
})
export class PastaViewComponent implements OnInit {

  @Input() pasta:Pasta;
  @Input() objetos:Objeto[];
  
  constructor(private dlg:MatDialog, 
    private gerObjetos:GerenteObjetoService) {
   }

  ngOnInit() {
    
  }

  novoObjeto(): void{
    let dialogRef = this.dlg.open(DlgNovoObjetoComponent, 
      {width: '800px', data: {pasta:this.pasta}}
    );
    dialogRef.afterClosed().subscribe((r) => {
    });
  }
}
