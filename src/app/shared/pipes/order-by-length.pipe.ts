import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByLength'
})
export class OrderByLengthPipe implements PipeTransform {
  transform(value: string[], isAscending: boolean = true): string[] {
    value.sort((a, b) => {
      let val = a.length - b.length;

      if(isAscending) {
        val *= -1;
      }

      return val;
    });

    return value;
  }
}
