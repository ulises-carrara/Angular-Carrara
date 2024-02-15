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
import {MatCardModule} from '@angular/material/card';
import { ValidatorErrorPipe } from './validator-error.pipe';


@NgModule({
  declarations: [
    FullNamePipe,
    TitleDirective,
    ValidatorErrorPipe
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
    MatCardModule,
    ValidatorErrorPipe,
    
    
  ]
})
export class SharedModule { }
