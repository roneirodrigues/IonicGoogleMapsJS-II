import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDataBoolean', pure: false

})
export class FilterDataPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    if (!items) { return []; }
    if (!value) { return items; }
    return items.filter(it => it[field] == value);
  }
}
