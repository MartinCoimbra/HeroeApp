import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [],
})
export class HeroeComponent implements OnInit {
  heroe!: Heroe;

  constructor(
    private activatedRouter: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /* obstenemos el id paramas */
    this.activatedRouter.params.subscribe(({ id }) => {
      this.heroesService.getHeroeById(id).subscribe((getHeroe) => {
        this.heroe = getHeroe;
      });
    });
  }

  regresar() {
    this.router.navigate(['/heroes/listado']);
  }
}
