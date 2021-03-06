import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { UsersService } from '../../services/users.service';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersUpdateComponent } from './users-update/users-update.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersDeleteComponent } from './users-delete/users-delete.component';

import { EpochParserPipe } from '../../pipes/epoch-parser.pipe';

@NgModule({
  declarations: [
    UsersComponent,
    UsersAddComponent,
    UsersUpdateComponent,
    UsersDetailComponent,
    UsersDeleteComponent,
    EpochParserPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
