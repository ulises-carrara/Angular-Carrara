import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitle]'
})
export class TitleDirective {

  constructor(
    private elementRef: ElementRef,
    private rendere: Renderer2
  ) { 
    this.rendere.setStyle(this.elementRef.nativeElement, "text-decoration","underline grey",)
    this.rendere.setStyle(this.elementRef.nativeElement, "font-size","20px")
  }

}
