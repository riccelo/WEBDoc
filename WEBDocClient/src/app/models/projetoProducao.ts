import { Projeto } from './projeto';
import { Pasta } from './pasta';
import { Processo } from './processo';

export class ProjetoProducao {
    _id:number;
    nome:string;
    projetoModelo:Projeto;
    pastaRaiz:Pasta;
    processos:Processo[];
};