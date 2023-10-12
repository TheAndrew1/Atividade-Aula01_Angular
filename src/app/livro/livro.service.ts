import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Livro } from './livroModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  API: string = "http://localhost:8080/api/livro";
  http = inject(HttpClient);

  constructor() { }

  findById(id: number): Observable<Livro> {
    return this.http.get<Livro>(this.API + "?id=" + id); 
  }

  listAll(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.API + "/lista"); 
  }

  save(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.API, livro);
  }

  edit(id: number, livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(this.API + "?id=" + id, livro);
  }

  delete(id: number): Observable<Livro> {
    return this.http.delete<Livro>(this.API + "?id=" + id);
  }

  exemploErro(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.API + "/erro");
  }
}
