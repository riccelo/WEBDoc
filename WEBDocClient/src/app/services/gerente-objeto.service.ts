import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { SERVERURL, Config } from '../config';
import { Objeto } from '../models/objeto';
import { Pasta } from '../models/pasta';

const OBJETOAPI = SERVERURL + 'objetos';
const OBJETOPASTAAPI = SERVERURL + 'objetos/pasta';

@Injectable({
  providedIn: 'root'
})
export class GerenteObjetoService {

  constructor(private http: HttpClient) { 
    this.config = new Config();
  }
  
  config:Config;

  public getObjetosPasta(pasta:Pasta):  Observable<Objeto[]> {
    //console.log(VARIAVELAPI);
    return  this.http.get<Objeto[]>(OBJETOPASTAAPI + "/" + pasta._id)
      .pipe(
        catchError(this.config.handleError<any>('getObjetos', []))
      );
  };

  public getObjetoById(id: String):  Observable<Objeto> {
    return this.http.get<Objeto>(OBJETOAPI+"/"+id)
      .pipe(
        catchError(this.config.handleError<any>('getObjetoById', []))
      );
  };

  saveObjeto(objeto:Objeto): Observable<any> {
    console.log("salvando objeto...", objeto);
    if (objeto._id < 0) {
      objeto._id = undefined;
      console.log("Criando: ", objeto, OBJETOAPI)
    return this.http.post<Objeto>(OBJETOPASTAAPI + "/" + objeto.pasta._id, objeto, this.config.httpOptions)
      .pipe(catchError(this.config.handleError<any>('saveObjeto')))
    } else {
      console.log("Atualizando:", objeto, OBJETOAPI)
    return this.http.put<Objeto>(OBJETOAPI, objeto, this.config.httpOptions)
      .pipe(catchError(this.config.handleError<any>('saveObjeto')))
    }
  }

  apagar(objeto:Objeto): Observable<any> {
    console.log("apagar", objeto);
      return this.http.post<Objeto>(OBJETOAPI + '/delete/', objeto, this.config.httpOptions)
      .pipe(catchError(this.config.handleError<any>('deleteObjeto')))
  }
}
