import { Pipe, PipeTransform } from '@angular/core';
import {  ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'validatorError'
})
export class ValidatorErrorPipe implements PipeTransform {

  transform(errors?: ValidationErrors | null, ...args: unknown[]): unknown {
    
    if (!!errors) {
      
      if (errors['email']) return 'El E-mail no es valido'
      if(errors['required'])return 'Este campo es requerido'
        
      

    }
    
    return null;
  }

}
