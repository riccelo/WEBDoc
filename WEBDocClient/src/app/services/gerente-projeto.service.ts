import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVERURL, Config } from '../config';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Projeto } from '../models/projeto';
import { ProjetoProducao } from '../models/projetoProducao';

const PROJETOAPI = SERVERURL + 'projetos';
const PROJETOPRODUCAOAPI = SERVERURL + 'projetosproducao';

@Injectable({
  providedIn: 'root'
})
export class GerenteProjetoService {

  constructor(private http: HttpClient) { 
    this.config = new Config();
  }
  
  config:Config;

  public getProjetos():  Observable<Projeto[]> {
    return  this.http.get<Projeto[]>(PROJETOAPI)
      .pipe(
        catchError(this.config.handleError<any>('getProjetos', []))
      );
  };

  public getProjetosProducao(somenteAtivos:boolean):  Observable<ProjetoProducao[]> {
    return  this.http.get<ProjetoProducao[]>(PROJETOPRODUCAOAPI)
      .pipe(
        catchError(this.config.handleError<any>('getProjetosProd', []))
      );
  };

  public getProjetoProducaoById(id):  Observable<ProjetoProducao> {
    return  this.http.get<Projeto>(PROJETOPRODUCAOAPI + "/" + id)
      .pipe(
        catchError(this.config.handleError<any>('getProjetosProducao', []))
      );
  };

  public getProjetoById(id):  Observable<Projeto> {
    return  this.http.get<Projeto>(PROJETOAPI + "/" + id)
      .pipe(
        catchError(this.config.handleError<any>('getProjetos', []))
      );
  };

  salvarProjeto(projeto:Projeto) : Observable<any> {
    console.log(projeto);
    if (projeto._id < 0) {
      projeto._id = undefined;
      console.log("Criando: ", projeto, PROJETOAPI)
    return this.http.post<Projeto>(PROJETOAPI, projeto, this.config.httpOptions)
      .pipe(catchError(this.config.handleError<any>('saveprojeto')))
    } else {
      console.log("Atualizando:", projeto, PROJETOAPI)
    return this.http.put<Projeto>(PROJETOAPI, projeto, this.config.httpOptions)
      .pipe(catchError(this.config.handleError<any>('saveprojeto')))
    }
  }

  salvarProjetoProducao(projetoProd:ProjetoProducao) : Observable<any> {
    if (projetoProd._id < 0) {
      projetoProd._id = undefined;
      console.log("Criando: ", projetoProd, PROJETOPRODUCAOAPI)
    return this.http.post<ProjetoProducao>(PROJETOPRODUCAOAPI, projetoProd, this.config.httpOptions)
      .pipe(catchError(this.config.handleError<any>('saveprojetoProd')))
    } else {
      console.log("Atualizando:", projetoProd, PROJETOPRODUCAOAPI)
    return this.http.put<ProjetoProducao>(PROJETOAPI, projetoProd, this.config.httpOptions)
      .pipe(catchError(this.config.handleError<any>('saveprojetoProd')))
    }
  }

  apagar(projeto:Projeto): Observable<any> {
    console.log("apagar", projeto);
      return this.http.post<Projeto>(PROJETOAPI + '/delete/', projeto, this.config.httpOptions)
      .pipe(catchError(this.config.handleError<any>('saveProjeto')))
  }

  apagarProjetoProducao(projeto:ProjetoProducao): Observable<any> {
    console.log("apagar", projeto);
      return this.http.delete(PROJETOPRODUCAOAPI + "/" + projeto._id)
      .pipe(catchError(this.config.handleError<any>('saveProjeto')))
  }
}
