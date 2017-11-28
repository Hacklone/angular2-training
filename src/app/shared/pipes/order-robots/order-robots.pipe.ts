import { Pipe, PipeTransform } from '@angular/core';
import { Robot } from '../../models/robot.interface';

@Pipe({
  name: 'orderRobots'
})
export class OrderRobotsPipe implements PipeTransform {
  transform(robotList: Robot[], ascending: boolean = true): Robot[] {
    return robotList.sort((a: Robot, b: Robot) => {
      let difference = a.name.localeCompare(b.name);

      if (!ascending) {
        difference *= -1;
      }

      return difference;
    });
  }
}
