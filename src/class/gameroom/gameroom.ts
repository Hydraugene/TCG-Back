import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
  } from '@nestjs/websockets';
  import { from, Observable } from 'rxjs';
  import { map } from 'rxjs/operators';import { Server } from 'socket.io';

  export interface Message {
    source: string;
    content: string;
  }

@WebSocketGateway({
    cors: {
      origin: '*',
    },
  },)
export class Gameroom {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('identity')
    async identity(@MessageBody() data: string): Promise<string> {
        console.log("identity :"+data);
      return data;
    }
  
    @SubscribeMessage('events')
    findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
        console.log("numbers :"+data);
      return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
    }


    @SubscribeMessage('testping')
    handleEvent(@MessageBody() data: string): string {
        console.log("pingpong :"+data);
      return 'pong';
    }
    
  

}
