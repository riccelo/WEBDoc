import { Classe } from "./classe";

export class Pasta {
    _id: Number;
    nome: String;
    nivel: number;
    pai: Pasta;
    classes: any[];
    subPastas: Pasta[];

    constructor(){
        this.nivel = 0;
        this.subPastas = new Array<Pasta>();
        this.nome = "Nova Pasta";
    }
}