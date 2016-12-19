import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMagnify]'
})
export class MagnifyDirective {

  constructor(private el: ElementRef) {
  }

  @Input()
  public appMagnify: number;

  @HostListener('mouseenter')
  onMouseEnter() {
    this._setScale(this.appMagnify);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this._setScale(1);
  }

  private _setScale(multiplier: number) {
    this.el.nativeElement.style.transform = `scale(${multiplier})`;
  }
}
