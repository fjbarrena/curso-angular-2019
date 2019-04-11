import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersUpdateComponent } from './users-update/users-update.component';
import { UsersDeleteComponent } from './users-delete/users-delete.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'add',
    component: UsersAddComponent
  },
  {
    path: 'detail/:id',
    component: UsersDetailComponent
  },
  {
    path: 'update/:id',
    component: UsersUpdateComponent
  },
  {
    path: 'delete/:id',
    component: UsersDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
