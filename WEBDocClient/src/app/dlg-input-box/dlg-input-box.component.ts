import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dlg-input-box',
  templateUrl: './dlg-input-box.component.html',
  styleUrls: ['./dlg-input-box.component.css']
})
export class DlgInputBoxComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DlgInputBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  sair(): void {
    this.dialogRef.close(this.data.texto);
  }
}
