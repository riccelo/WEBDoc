import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { SERVERURL, Config } from '../config';
import { Classe } from '../models/classe';

const CLASSEAPI = SERVERURL + 'classes';

@Injectable({
  providedIn: 'root'
})
export class GerenteClasseService {

  constructor(private http: HttpClient) { 
    this.config = new Config();
  }
  
  config:Config;

  public getClasses():  Observable<Classe[]> {
    //console.log(VARIAVELAPI);
    return  this.http.get<Classe[]>(CLASSEAPI)
      .pipe(
        catchError(this.config.handleError<any>('getClasses', []))
      );
  };

  public getClasseById(id: String):  Observable<Classe[]> {
    return this.http.get<Classe[]>(CLASSEAPI+"/"+id)
      .pipe(
        catchError(this.config.handleError<any>('getClasses', []))
      );
  };

  saveClasse(classe:Classe): Observable<any> {
    console.log(classe);
    if (classe._id < 0) {
      classe._id = undefined;
      console.log("Criando: ", classe, CLASSEAPI)
    return this.http.post<Classe>(CLASSEAPI, classe, this.config.httpOptions)
      .pipe(catchError(this.config.handleError<any>('saveClasse')))
    } else {
      console.log("Atualizando:", classe, CLASSEAPI)
    return this.http.put<Classe>(CLASSEAPI, classe, this.config.httpOptions)
      .pipe(catchError(this.config.handleError<any>('saveClasse')))
    }
  }

  apagar(classe:Classe): Observable<any> {
    console.log("apagar", classe);
      return this.http.post<Classe>(CLASSEAPI + '/delete/', classe, this.config.httpOptions)
      .pipe(catchError(this.config.handleError<any>('saveClasse')))
  }
}
