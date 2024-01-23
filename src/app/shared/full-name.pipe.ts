import { Pipe, PipeTransform } from '@angular/core';

export interface UserPipe {
  nombre: string,
  apellido: string
}
@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: UserPipe, ...args: unknown[]): unknown {//en el value recibe el elemento a modificar  
    return value.nombre + ' '+ value.apellido;
  }

}
