import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[zoom]'
})
export class ZoomDirective {
  constructor(private _elementRef: ElementRef) {
  }

  @Input('zoom')
  public scaleToZoom: number = 1.5;

  @HostListener('mouseenter')
  public onMouseEnter() {
    this._setScale(this.scaleToZoom);
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this._setScale(1);
  }

  private _setScale(scale: number) {
    this._elementRef.nativeElement.style.transform = `scale(${scale})`;
  }
}
