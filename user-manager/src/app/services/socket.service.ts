import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';
import { Event } from '../models/event.model';

import * as socketIo from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: any;
  private SERVER_URL: string = 'http://localhost:8989';

  initSocket(): void {
    this.socket = socketIo(this.SERVER_URL);
  }

  send(message: Message): void {
    this.socket.emit('message', message);
  }

  onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      this.socket.on('message', (data: Message) => observer.next(data));
    });
  }

  onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
  });
}
}
