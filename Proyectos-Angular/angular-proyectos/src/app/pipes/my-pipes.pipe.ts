import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipes',
})
export class MyPipesPipe implements PipeTransform {

  transform(value: number[], ...args: any): number[] {
    
    let arrayNumerosPrimos: number[] = value.filter(num => this.esPrimo(num));
    return arrayNumerosPrimos;
  }

  private esPrimo(num: number): boolean {
    if (num <= 1) {
      return false;
    }
      for (let i = 2; i < num ; i++) {
        if (num % i === 0) {
          return false;
        }
      }
    return true;
  }
}
