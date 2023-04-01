import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [],
})
export class BuscarComponent {
  termino: string = '';
  heroes: Heroe[] = [];
  hayError: boolean = false;

  heroeSeleccionado!: Heroe | undefined;

  constructor(private heroesService: HeroesService) {}

  buscando() {
    this.heroesService
      .getSugerencias(this.termino.trim())
      .subscribe((heroes) => (this.heroes = heroes));
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    const heroe: Heroe = event.option.value;

    if (!event.option.value) {
      this.heroeSeleccionado = undefined
      return;
    }

    this.termino = heroe.superhero;

    this.heroesService
      .getHeroeById(heroe.id!)
      .subscribe((resp) => (this.heroeSeleccionado = resp));
  }
}
