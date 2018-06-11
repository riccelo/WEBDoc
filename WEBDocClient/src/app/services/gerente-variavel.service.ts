import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Variavel } from '../models/variavel';
import { SERVERURL } from '../config';
import { Config } from '../config';

const VARIAVELAPI = SERVERURL + 'variaveis';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GerenteVariavelService {

  constructor(private http: HttpClient) { 
    this.config = new Config();
  }
  
  config:Config;

  public getVariaveis():  Observable<Variavel[]> {
    //console.log(VARIAVELAPI);
    return  this.http.get<Variavel[]>(VARIAVELAPI)
      .pipe(
        catchError(this.config.handleError<any>('getVariaveis', []))
      );
  };

  public saveVariavel(variavel : Variavel) : Observable<any> {
    console.log(variavel);
    if (variavel._id < 0) {
      variavel._id = undefined;
      console.log("Criando: ", variavel, VARIAVELAPI)
    return this.http.post<Variavel>(VARIAVELAPI, variavel, httpOptions)
      .pipe(catchError(this.config.handleError<any>('saveVariavel')))
    } else {
      console.log("Atualizando:", variavel, VARIAVELAPI)
    return this.http.put<Variavel>(VARIAVELAPI, variavel, httpOptions)
      .pipe(catchError(this.config.handleError<any>('saveVariavel')))
    }
  }
}
