import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertirAString'
})
export class ConvertirAStringPipe implements PipeTransform {

  transform(value: number[], ...args: any): string[] {
    
    return value.map(num => num.toString());
  }

}
