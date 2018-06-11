import { Component, OnInit, Input } from '@angular/core';

import { Propriedade } from '../models/propriedade';

@Component({
  selector: 'app-propriedade-edicao',
  templateUrl: './propriedade-edicao.component.html',
  styleUrls: ['./propriedade-edicao.component.css']
})
export class PropriedadeEdicaoComponent implements OnInit {
  @Input() propriedade:Propriedade;
  constructor() { }

  ngOnInit() {
  }

}
