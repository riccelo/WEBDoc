import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracao',
  templateUrl: './administracao.component.html',
  styleUrls: ['./administracao.component.css']
})
export class AdministracaoComponent implements OnInit {

  constructor() { 
    this.menu='';
  }

  ngOnInit() {
  }

  menu: string;
  onMenu(selMenu: string): void {
    this.menu = selMenu;
  }
}
