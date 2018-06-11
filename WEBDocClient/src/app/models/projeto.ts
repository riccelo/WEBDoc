import {Pasta} from './pasta';

export class Projeto {
    _id: number;
    nome: string;
    pastaRaiz: Pasta;

    constructor(){
        this.pastaRaiz = new Pasta();
        this.pastaRaiz.nome = "Raiz";
    }
};