import { ChampionService } from './services/champion.service';
import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appCustomBorder]'
})
export class CustomBorderDirective {

  @Input() appCustomBorder: string;
  @Input("championName") championName: string;

  @HostListener("mouseenter")
  public addBorderColor() {
    this.elr.nativeElement.style.borderColor = 'red';
    this.elr.nativeElement.style.borderStyle = 'solid';

    this.champService.getChampionData().subscribe(
      (data) => {
        console.log(data[0].data[this.appCustomBorder].info);
      }
    );

  }

  @HostListener("mouseleave")
  public removeBorderColor() {
    this.elr.nativeElement.style.border = null;
  }

  constructor(private elr: ElementRef,
              private champService: ChampionService,
              private renderer: Renderer2) { }

}
