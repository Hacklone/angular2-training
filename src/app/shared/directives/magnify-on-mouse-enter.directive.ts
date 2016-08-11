import {Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive({
  selector: '[appMagnifyOnMouseEnter]'
})
export class MagnifyOnMouseEnterDirective {
  isMagnifyApplied: boolean;
  originalFontSize: number;

  constructor(private element: ElementRef) {

  }

  @Input('appMagnifyOnMouseEnter')
  magnifyPercentage: number;

  @HostListener('mouseenter')
  onMouseEnter() {
    if(this.isMagnifyApplied) {
      return;
    }

    this.isMagnifyApplied = true;

    this.originalFontSize = this.element.nativeElement.style.fontSize;

    this.element.nativeElement.style.fontSize = '20px';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isMagnifyApplied = false;

    this.element.nativeElement.style.fontSize = this.originalFontSize;
  }
}
