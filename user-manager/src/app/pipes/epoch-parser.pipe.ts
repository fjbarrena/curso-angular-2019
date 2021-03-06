import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'epochParser'
})
export class EpochParserPipe implements PipeTransform {

  transform(epoch: number, args?: any): any {
    let d = new Date(0);
    d.setUTCSeconds(epoch);
    let dateString = d.getUTCDate() + '-' + (d.getUTCMonth()+1) +"-"+ d.getUTCFullYear() + " " + d.getUTCHours() + ":" + d.getUTCMinutes() + ":" + d.getUTCSeconds();
    return dateString;
  }

}
