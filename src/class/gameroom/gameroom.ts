import {
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
  } from '@nestjs/websockets';
  import { from, Observable, of } from 'rxjs';
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
    private connectedClients: Set<WebSocket> = new Set<WebSocket>();

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
    handleEvent(@MessageBody() data: string): Observable<string> {
        console.log("pingpong :"+data);
      return of('pong');
    }
    

    // @WebSocketServer()
    // server: Server;
  
    // afterInit(server: Server) {
    //   console.log('WebSocket server initialized');
    // }
  
    handleConnection(client: WebSocket, ...args: any[]) {
      console.log('Client connected');
        this.connectedClients.add(client);
    }
  
    // handleDisconnect(client: WebSocket) {
    //   console.log('Client disconnected');
    // }
  
    @SubscribeMessage('messageFromClient')
    handleMessage(@MessageBody() message: string) {
      console.log('Received message from client:', message);
  
      // Echo the message back to the client
      //return message;
      this.broadcastMessage('broadcast')
    }
  

  private broadcastMessage(message: string) {
    this.connectedClients.forEach(client => {
      client.send(JSON.stringify(message));
    });
  }

  @SubscribeMessage('startGame')
  handleStart(@MessageBody() message: string) {
    console.log('Start now :', message);

    // Echo the message back to the client
    //return message;
    this.broadcastMessage('Start')
  }

  @SubscribeMessage('pioche')
  handlePioche(@MessageBody() message: string) {
    console.log('Pioche :', message);
    this.broadcastMessage('Pioche')
  }

  @SubscribeMessage('jouer')
  handleJouer(@MessageBody() message: string) {
    console.log('Jouer :', message);
    this.broadcastMessage('Jouer')
  }

  @SubscribeMessage('finTour')
  handleFinTour(@MessageBody() message: string) {
    console.log('tourFini :', message);
    this.broadcastMessage('tourFini')
  }


}
