import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface'

@Pipe({
  name: 'defaultType'
})
export class DefaultTypePipe implements PipeTransform {

  transform(content: Content): string {
    return content.type || "Book";
  }

}
