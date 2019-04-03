import { TestComponent } from './features/test/test.component';
import { PrivateComponent } from './features/private/private.component';
import { LoginComponent } from './features/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'private',
    component: PrivateComponent,
    children: [
      {
        path: 'dashboard',
        component: TestComponent
      },
      {
        path: 'games',
        component: TestComponent
      },
      {
        path: 'champions',
        component: TestComponent
      },
      {
        path: 'stats',
        component: TestComponent
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
