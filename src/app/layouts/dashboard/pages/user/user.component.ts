import { Component } from '@angular/core';
import { User } from './models';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  displayedColumns: string[] = ['id', 'nombrecompleto', 'curso', 'email'];
  dataSource: User[]= []

  onUserSubmit(ev: User):void{
    this.dataSource = [...this.dataSource, {...ev, id:new Date().getMilliseconds()}]//para que angular actualize la tabla le especificamos que la data es igual al la data existente mas lo que reciba en el evento
  }
  

}
