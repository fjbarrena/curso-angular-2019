import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBorderDirective } from './directives/custom-border.directive';

@NgModule({
  declarations: [
    CustomBorderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomBorderDirective
  ]
})
export class SharedModule { }
