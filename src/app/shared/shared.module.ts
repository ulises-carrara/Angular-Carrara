import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//pipes y directives
import { FullNamePipe } from './full-name.pipe';
import { TitleDirective } from './title.directive';
//angular
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    FullNamePipe,
    TitleDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FullNamePipe, 
    TitleDirective, 
    MatTableModule, 
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    
  ]
})
export class SharedModule { }
