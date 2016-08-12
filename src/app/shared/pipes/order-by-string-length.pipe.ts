import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'orderByStringLength'
})
export class OrderByStringLengthPipe implements PipeTransform {
  transform(value: string[], asc: boolean): any {
    const orderedList = value.sort((a, b) => {
      return a.length === b.length ? 0 : (a.length > b.length ? 1 : -1)
    });

    if(asc) {
      orderedList.reverse();
    }

    return orderedList;
  }
}
