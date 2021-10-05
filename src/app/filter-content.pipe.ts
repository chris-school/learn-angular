import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface'
import { ContentListComponent } from './content-list/content-list.component';
import { ROUTER_CONFIGURATION } from '@angular/router';

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(contentList: Content[], filterString: string): Content[] {

    return contentList.filter(content => content.type?.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)
  }

}
