import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/users/users.module#UsersModule'
  },
  {
    path: 'chat',
    loadChildren: './modules/chat/chat.module#ChatModule'
  },
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule'
  },
  {  path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
