import { createServer, Server } from 'http';
import * as express from 'express';
import * as socketIo from 'socket.io';
import { GameEvent, GeoTwitt } from './model';


export class GeoTwittServer {
    public static readonly PORT:number = 62000;
    private app: express.Application;
    private server: Server;
    private io: SocketIO.Server;
    private port: string | number;

    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
        
    }

    private createApp(): void {
        this.app = express();
    }

    private createServer(): void {
        this.server = createServer(this.app);
    }

    private config(): void {
        this.port = process.env.PORT || GeoTwittServer.PORT;
    }

    private sockets(): void {
        this.io = socketIo(this.server);
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running GeoTwittServer on port %s', this.port);
        });

        this.io.on('connect', (socket: any) => {
            console.log('Connected client on port %s.', this.port);
            
            // Empezamos a emitir eventos en cuanto un usuario se conecta, antes no tiene sentido
            this.emitEvents();

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }

    private emitTwittIn(millis: number) {
        let emitter = this.io;
        
        setTimeout( () => {
            emitter.emit('geo-twitt', 
                GeoTwitt.create(
                    '@DogDeveloper', 
                    this.generateRandomLatLong(),
                    this.generateRandomLatLong(),
                    'Hola caracola'
                )
            );
        },millis);
    }

    private generateRandomLatLong(): number {
        return Math.random() * (40 - 0) + 40;
    }

    private generateRandomTime(): number {
        return Math.random() * (60000 - 30000) + 30000;
    }

    /* emite los mismos eventos siempre, es para jugar :D */
    private emitEvents() {
        for(let i=0; i <= 3000; i++) {
            this.emitTwittIn(this.generateRandomTime());
        }
    }

    public getApp(): express.Application {
        return this.app;
    }
}
