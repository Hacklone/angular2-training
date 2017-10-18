import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByProperty',
  pure: false
})
export class OrderByPropertyPipe implements PipeTransform {
  transform(itemsToOrder: any[], propertyToOrderBy: string, ascending: boolean = true): any[] {
    const orderedList = itemsToOrder.sort((a: any, b: any) => {
      const aValue: string = a[propertyToOrderBy];
      const bValue: string = b[propertyToOrderBy];

      let compareValue = aValue.localeCompare(bValue);

      if (!ascending) {
        compareValue *= -1;
      }

      return compareValue;
    });

    return orderedList;
  }
}
