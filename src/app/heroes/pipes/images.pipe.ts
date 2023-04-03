import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {
  url: string = '';

  transform(heroe: Heroe): string {
    return heroe.alt_img ? heroe.alt_img : heroe.id ? `assets/heroes/${heroe.id}.jpg` : `assets/no-image.png` 
  }
}
