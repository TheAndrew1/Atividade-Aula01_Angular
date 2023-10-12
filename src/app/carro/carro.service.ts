import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from './carroModel';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  API: string = "http://localhost:8080/api/carro";
  http = inject(HttpClient);

  constructor() { }

  findById(id: number): Observable<Carro> {
    return this.http.get<Carro>(this.API + "?id=" + id); 
  }

  listAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.API + "/lista"); 
  }

  save(carro: Carro): Observable<Carro> {
    return this.http.post<Carro>(this.API, carro);
  }

  edit(id: number, carro: Carro): Observable<Carro> {
    return this.http.put<Carro>(this.API + "?id=" + id, carro);
  }

  delete(id: number): Observable<Carro> {
    return this.http.delete<Carro>(this.API + "?id=" + id);
  }

  exemploErro(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.API + "/erro");
  }
}
