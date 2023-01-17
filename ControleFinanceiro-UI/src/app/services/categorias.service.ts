import { Categoria } from './../models/Categoria';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  url = 'api/Categorias';

  constructor(private http: HttpClient) { }

  getListaCategorias() : Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url);
  }

  getCategoriaById(categoriaId: number) : Observable<Categoria> {
    const apiUrl = `${this.url}/${categoriaId}`;
    return this.http.get<Categoria>(apiUrl);
  }

  postCategoria(categoria: Categoria) : Observable<any> {
    return this.http.post<Categoria>(this.url, categoria, httpOptions);
  }

  putCategoria(categoriaId: number, categoria: Categoria) : Observable<any> {
    const apiUrl = `${this.url}/${categoriaId}`;
    return this.http.put<Categoria>(apiUrl, categoria, httpOptions);
  }

  deleteCategoria(categoriaId: number) : Observable<any> {
    const apiUrl = `${this.url}/${categoriaId}`;
    return this.http.delete<number>(apiUrl, httpOptions);
  }
}
