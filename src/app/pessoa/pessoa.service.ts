import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoaModel';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  API: string = "http://localhost:8080/api/pessoa";
  http = inject(HttpClient);

  constructor() { }

  findById(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(this.API + "?id=" + id); 
  }

  listAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.API + "/lista"); 
  }

  save(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.API, pessoa);
  }

  edit(id: number, pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(this.API + "?id=" + id, pessoa);
  }

  delete(id: number): Observable<Pessoa> {
    return this.http.delete<Pessoa>(this.API + "?id=" + id);
  }

  exemploErro(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.API + "/erro");
  }
}
