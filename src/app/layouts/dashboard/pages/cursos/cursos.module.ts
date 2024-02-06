import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
    
  ]
})
export class CursosModule { }
