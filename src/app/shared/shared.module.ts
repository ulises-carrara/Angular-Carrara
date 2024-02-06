import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { TitleDirective } from './title.directive';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    FullNamePipe,
    TitleDirective
  ],
  imports: [
    CommonModule,
  ],
  exports:[FullNamePipe, TitleDirective, MatTableModule, MatButtonModule,]
})
export class SharedModule { }
