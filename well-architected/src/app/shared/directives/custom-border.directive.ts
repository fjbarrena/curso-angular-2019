import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appCustomBorder]'
})
export class CustomBorderDirective {

  @HostListener('mouseenter')
  public addBorderColor() {
    this.elr.nativeElement.style.borderColor = 'red';
    this.elr.nativeElement.style.borderStyle = 'solid';
  }

  @HostListener('mouseleave')
  public removeBorderColor() {
    this.elr.nativeElement.style.border = null;
  }

  constructor(private elr: ElementRef,
              private renderer: Renderer2) { }

}
