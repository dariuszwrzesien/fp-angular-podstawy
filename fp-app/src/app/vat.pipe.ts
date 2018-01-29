import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vat',
})
export class VatPipe implements PipeTransform {

  transform(value: any, vatValue: number, hasVat:boolean = true): any {
    let vatValueText = hasVat ? ` (+ ${value * vatValue}VAT)` : '';
    return value + vatValueText;
  }

}
