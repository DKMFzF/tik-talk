import { Pipe, PipeTransform } from '@angular/core';
import { API_ORIGIN } from '../../environment/env';

/**
 * пайп изображения
 */
@Pipe({
  name: 'imgUrl'
})
export class ImgUrlPipe implements PipeTransform {

  transform(value: string | null): string | null {
    if (!value) return null;
    return `${API_ORIGIN}/${value}`;
  }

}
