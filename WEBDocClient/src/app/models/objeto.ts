import { Classe } from './classe';
import { Pasta } from './pasta';
import { ProjetoProducao } from './projetoProducao';
import { Arquivo } from './arquivo';
import { Propriedade } from './propriedade';

export class Objeto {
    _id:number;
    nome:string;
    pasta:Pasta;
    classe:Classe;
    checkoutPor:number;
    versao:number;
    arquivos: Array<Arquivo>;
    propriedades:Array<Propriedade>;

    constructor(){
        this._id = -1;
        this.propriedades = new Array<Propriedade>();
    }
};