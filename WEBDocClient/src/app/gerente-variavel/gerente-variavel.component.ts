import { Component, OnInit } from '@angular/core';
import { Variavel } from '../models/variavel';
import { GerenteVariavelService } from '../services/gerente-variavel.service'

@Component({
  selector: 'app-gerente-variavel',
  templateUrl: './gerente-variavel.component.html',
  styleUrls: ['./gerente-variavel.component.css']
})
export class GerenteVariavelComponent implements OnInit {

  constructor(private gerVariavel: GerenteVariavelService) {
    this.variavelSelecionada = new Variavel();
    this.gerVariavel.getVariaveis().subscribe(
      vars => this.variaveis = vars
    );
   }

  ngOnInit() {
  }

  variavelSelecionada:Variavel;
  variaveis:Variavel[];

  onSelecionar(variavel): void {
    this.variavelSelecionada = variavel;
  }

  salvarVariavel(e): void {
    e.preventDefault();
    //console.log(e);

    //var variavel = this.variaveis.find((v) => {return v._id == this.variavelSelecionada._id});
    if (!this.variavelSelecionada._id){    
      this.variavelSelecionada._id = (this.variaveis.length + 1) * -1;
      this.variaveis.push(this.variavelSelecionada);
    }

    this.gerVariavel.saveVariavel(this.variavelSelecionada).subscribe(
      r => console.log(r)
    );
    this.variavelSelecionada = new Variavel();
  }
}
