import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
  } from '@nestjs/websockets';
  import { from, Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  import { Server } from 'socket.io';
  
  @WebSocketGateway({
    cors: {
      origin: '*',
    },
  })
  export class EventsGateway {
    @WebSocketServer()
    server: Server;
  
    @SubscribeMessage('events')
    findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
      console.log('methode findall');
  
      console.log(data);
      return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
    }
  
    handleConnection(client: any) {
      console.log(client.id);
    }
}