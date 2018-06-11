import { Variavel } from './variavel';

export class Classe {
    _id:number;
    nome:string;
    icone:string;
    permitePasta:boolean;
    variaveis:Variavel[] = [];
};