import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(value: string, limit: number, trail: string): string {
    limit = limit !== undefined ? limit : 45;
    trail = trail !== undefined ? trail : '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
