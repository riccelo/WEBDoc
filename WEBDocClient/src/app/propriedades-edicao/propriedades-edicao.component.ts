import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Objeto } from '../models/objeto';

@Component({
  selector: 'app-propriedades-edicao',
  templateUrl: './propriedades-edicao.component.html',
  styleUrls: ['./propriedades-edicao.component.css']
})
export class PropriedadesEdicaoComponent implements OnInit, OnChanges {
  @Input() objeto: Objeto
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges){
    console.log(this.objeto.classe)
  }
}
