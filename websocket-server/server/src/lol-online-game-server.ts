import { createServer, Server } from 'http';
import * as express from 'express';
import * as socketIo from 'socket.io';
import { GameEvent } from './model';


export class LolOnlineGameServer {
    public static readonly PORT:number = 63000;
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
        this.port = process.env.PORT || LolOnlineGameServer.PORT;
    }

    private sockets(): void {
        this.io = socketIo(this.server);
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running LolOnlineGameServer on port %s', this.port);
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

    /* emite los mismos eventos siempre, es para jugar :D */
    private emitEvents() {
        let emitter = this.io;
        this.io.emit('game-event', 
            GameEvent.create(
                'Empieza la partida', 
                'La partida entre Origen y G2 Vodafone acaba de empezar',
                'START',
                '',
                ''
            )
        );

        // Primera sangre a los 5 segundos
        setTimeout(function(){
            emitter.emit('game-event', 
                GameEvent.create(
                    'Kelear consigue la primera sangre', 
                    'Despliega todo su poder con Anivia, que stunea a Lux y con su combo mortal consigue la primera sangre',
                    'FIRST_BLOOD',
                    'ORIGEN',
                    'KELEAR'
                )
            );
        },5000);

        // A los 10 segundos, TRIPLE KILL
        setTimeout(function(){
            emitter.emit('game-event', 
                GameEvent.create(
                    'xPeke consigue un triple kill!', 
                    'Sale de la jungla con Fizz, lanza un tiburón y se merienda a 3 de G2 Vodafone',
                    'KILL',
                    'ORIGEN',
                    'xPEKE'
                )
            );
        },10000);

        // Cada segundo una serie de muertes 
        setTimeout(function(){
            emitter.emit('game-event', 
                GameEvent.create(
                    'Kill de xPeke!', 
                    'Hay una teamfight interesante! Os seguiremos informando',
                    'KILL',
                    'ORIGEN',
                    'xPEKE'
                )
            );
        },1000);

        setTimeout(function(){
            emitter.emit('game-event', 
                GameEvent.create(
                    'Kill de Mithy!', 
                    'Hay una teamfight interesante! Os seguiremos informando',
                    'KILL',
                    'G2',
                    'Mithy'
                )
            );
        },1000);

        setTimeout(function(){
            emitter.emit('game-event', 
                GameEvent.create(
                    'Kill de Mithy!', 
                    'Hay una teamfight interesante! Os seguiremos informando',
                    'KILL',
                    'G2',
                    'Mithy'
                )
            );
        },1000);

        setTimeout(function(){
            emitter.emit('game-event', 
                GameEvent.create(
                    'Kill de evokante!', 
                    'Hay una teamfight interesante! Os seguiremos informando',
                    'KILL',
                    'G2',
                    'evokante'
                )
            );
        },1000);

        setTimeout(function(){
            emitter.emit('game-event', 
                GameEvent.create(
                    'G2 golpea primero', 
                    'Menudo vuelco a la partida, G2 iguala muertes y tumba la primera torre',
                    'TOWER_DOWN',
                    'G2',
                    'mithy'
                )
            );
        },7000);
    }

    public getApp(): express.Application {
        return this.app;
    }
}
