import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitles]'
})
export class TitlesDirective {

  constructor(renderer: Renderer2, elmRef: ElementRef) { 
    renderer.setStyle(elmRef.nativeElement, 'font-size', '20px');
  }

}
