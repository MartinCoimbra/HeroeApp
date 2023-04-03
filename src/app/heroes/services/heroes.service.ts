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
    return this.http.get<Heroe[]>(
      `${this.baseUrl}heroes?q=${termino}&_limit=6`
    );
  }
  
  postPersonaje(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${this.baseUrl}heroes`, heroe);
  }
  
  putPersonaje(heroe: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(`${this.baseUrl}heroes/${heroe.id}`, heroe);
  }

  deletePersonaje(heroeId: string): Observable<{}> {
    return this.http.delete<{}>(`${this.baseUrl}heroes/${heroeId}`);
  }
}
