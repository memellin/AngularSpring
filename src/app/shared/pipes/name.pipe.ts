import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    switch(value){
      case 'Stephen Curry':
        return 'rocket_launcher';
      case 'LeBron James':
        return 'star_purple500';
    }
    return 'sports_basketball';

  }

}
