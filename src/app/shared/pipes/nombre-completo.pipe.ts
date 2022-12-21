import { Pipe, PipeTransform } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: Student, ...args: string[]): string {
    return value.firstName + " " + value.lastName;
  }

}
