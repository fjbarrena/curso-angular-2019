import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './private/private.component';
import { TestComponent } from './test/test.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, PrivateComponent, TestComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FeaturesModule { }
