import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  hide = true;

  userForm: FormGroup;//definimos una variable en la que almacenar nuestro formulario

  @Output()
  userSubmite = new EventEmitter()//output se usa para transmitir info desde un componente hijo a un componente padre  por ej eluser-form-component es el hijo y el user-component es el padre

 

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nombre: this.fb.control('', Validators.required),
      apellido: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      contraseña: this.fb.control('', Validators.required),
      curso: this.fb.control('', Validators.required),


    })
  }//inicializamos la variable y le indicamos que va a ser de tipo formgroup que quiere decir que va ser un grupo de controles un control por cada imput
  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched//se hace una validacion de que si el formulario es invalido marque todos los campos como tocados
    } else {
      this.userSubmite.emit(this.userForm.value)//cuandon se dispare la funcion se va a emitir el evento y se envia los valores del formulario
      this.userForm.reset()
    }

  }


}
