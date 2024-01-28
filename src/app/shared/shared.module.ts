import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { TitleDirective } from './title.directive';



@NgModule({
  declarations: [
    FullNamePipe,
    TitleDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[FullNamePipe, TitleDirective]
})
export class SharedModule { }
