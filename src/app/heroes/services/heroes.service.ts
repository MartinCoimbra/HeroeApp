import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environments';
import { Heroe } from '../interfaces/heroes.interfaces';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  /* Observable */
  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}heroes`);
  }

  getHeroeById(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseUrl}heroes/${id}`);
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}heroes?q=${termino}&_limit=6`);
  }
}