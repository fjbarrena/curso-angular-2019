import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SocketService } from '../../services/socket.service';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChatRoutingModule
  ],
  providers: [SocketService]
})
export class ChatModule { }
