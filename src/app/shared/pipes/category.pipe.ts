import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case "Estudante": return 'school';
      case 'Empregado(a)': return 'payments';
      case 'Desempregado(a)': return 'mood_bad';
      case 'Aposentado(a)': return 'card_membership';
    }
    return 'person';
  }

}
