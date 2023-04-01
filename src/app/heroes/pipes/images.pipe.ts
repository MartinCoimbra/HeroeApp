import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'images',
})
export class ImagesPipe implements PipeTransform {
  url: string = '';

  transform(heroe: Heroe): string {
    if(heroe.id){
      this.url += `assets/heroes/${heroe.id}.jpg`
    }else{
      this.url += `assets/no-image.png`
    }
    return this.url;
  }
}
