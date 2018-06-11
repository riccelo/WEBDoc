import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DlgNovoProjetoComponent } from '../dlg-novo-projeto/dlg-novo-projeto.component';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() atualizarPai = new EventEmitter<boolean>();

  constructor(private dlg:MatDialog) { }

  ngOnInit() {
  }

  novoProjeto(): void {
    let dialogRef = this.dlg.open(DlgNovoProjetoComponent, 
      {width: '400px', data: {}}
    );
    dialogRef.afterClosed().subscribe((r) => {
      this.atualizarPai.emit(true);
    });
  }
}
