import { Tipo } from './../models/Tipo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiposService {

  url: string = 'api/Tipos';

  constructor(private http: HttpClient) { }

  getListaTipos() : Observable<Tipo[]> {
    return this.http.get<Tipo[]>(this.url);
  }
}
