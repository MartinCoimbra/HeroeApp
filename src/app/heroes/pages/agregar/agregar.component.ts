import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent implements OnInit {
  publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];
  /* valores por default */
  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.heroesService.getHeroeById(id).subscribe((heroe) => {
        this.heroe = heroe;
      });
    });
  }

  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      /* Editar */
      this.heroesService.putPersonaje(this.heroe).subscribe(() => {
        this.mostrarSnakbar('Registro actualizado');
        this.router.navigate([`/heroes/${this.heroe.id}`]);
      });
    } else {
      /* Guardar - Post */
      this.heroesService.postPersonaje(this.heroe).subscribe((heroe: Heroe) => {
        this.mostrarSnakbar('Registro actualizado');
        this.router.navigate([`/heroes/${heroe.id}`]);
      });
    }
  }

  borrar() {
    if (this.heroe.id) {
      this.heroesService.deletePersonaje(this.heroe.id).subscribe(() => {
        this.mostrarSnakbar('Registro ELIMINADO');
        this.router.navigate([`/heroes/listado`]);
      });
    }
  }

  mostrarSnakbar(mensaje: string) {
    this._snackBar.open(mensaje, 'Ok!', {
      duration: 2500,
    });
    this.router.navigate([`/heroes/${this.heroe.id}`]);
  }
}
