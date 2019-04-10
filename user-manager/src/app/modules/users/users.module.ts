import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersService } from '../../services/users.service';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersUpdateComponent } from './users-update/users-update.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersDeleteComponent } from './users-delete/users-delete.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersAddComponent,
    UsersUpdateComponent,
    UsersDetailComponent,
    UsersDeleteComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
