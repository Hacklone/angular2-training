import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {
  constructor(private _elementRef: ElementRef) {

  }

  @Input('appZoom')
  public zoomScale: number = 1.1;

  @HostListener('mouseenter')
  public onMouseEnter() {
    this._zoom(this.zoomScale);
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this._zoom(1);
  }

  private _zoom(scale: number) {
    this._elementRef.nativeElement.style.transform = `scale(${scale})`
  }
}
