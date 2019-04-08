"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var express = require("express");
var socketIo = require("socket.io");
var model_1 = require("./model");
var LolOnlineGameServer = /** @class */ (function () {
    function LolOnlineGameServer() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }
    LolOnlineGameServer.prototype.createApp = function () {
        this.app = express();
    };
    LolOnlineGameServer.prototype.createServer = function () {
        this.server = http_1.createServer(this.app);
    };
    LolOnlineGameServer.prototype.config = function () {
        this.port = process.env.PORT || LolOnlineGameServer.PORT;
    };
    LolOnlineGameServer.prototype.sockets = function () {
        this.io = socketIo(this.server);
    };
    LolOnlineGameServer.prototype.listen = function () {
        var _this = this;
        this.server.listen(this.port, function () {
            console.log('Running LolOnlineGameServer on port %s', _this.port);
        });
        this.io.on('connect', function (socket) {
            console.log('Connected client on port %s.', _this.port);
            // Empezamos a emitir eventos en cuanto un usuario se conecta, antes no tiene sentido
            _this.emitEvents();
            socket.on('disconnect', function () {
                console.log('Client disconnected');
            });
        });
    };
    /* emite los mismos eventos siempre, es para jugar :D */
    LolOnlineGameServer.prototype.emitEvents = function () {
        var emitter = this.io;
        this.io.emit('game-event', model_1.GameEvent.create('Empieza la partida', 'La partida entre Origen y G2 Vodafone acaba de empezar', 'START', '', ''));
        // Primera sangre a los 5 segundos
        setTimeout(function () {
            emitter.emit('game-event', model_1.GameEvent.create('Kelear consigue la primera sangre', 'Despliega todo su poder con Anivia, que stunea a Lux y con su combo mortal consigue la primera sangre', 'FIRST_BLOOD', 'ORIGEN', 'KELEAR'));
        }, 5000);
        // A los 10 segundos, TRIPLE KILL
        setTimeout(function () {
            emitter.emit('game-event', model_1.GameEvent.create('xPeke consigue un triple kill!', 'Sale de la jungla con Fizz, lanza un tiburón y se merienda a 3 de G2 Vodafone', 'KILL', 'ORIGEN', 'xPEKE'));
        }, 10000);
        // Cada segundo una serie de muertes 
        setTimeout(function () {
            emitter.emit('game-event', model_1.GameEvent.create('Kill de xPeke!', 'Hay una teamfight interesante! Os seguiremos informando', 'KILL', 'ORIGEN', 'xPEKE'));
        }, 1000);
        setTimeout(function () {
            emitter.emit('game-event', model_1.GameEvent.create('Kill de Mithy!', 'Hay una teamfight interesante! Os seguiremos informando', 'KILL', 'G2', 'Mithy'));
        }, 1000);
        setTimeout(function () {
            emitter.emit('game-event', model_1.GameEvent.create('Kill de Mithy!', 'Hay una teamfight interesante! Os seguiremos informando', 'KILL', 'G2', 'Mithy'));
        }, 1000);
        setTimeout(function () {
            emitter.emit('game-event', model_1.GameEvent.create('Kill de evokante!', 'Hay una teamfight interesante! Os seguiremos informando', 'KILL', 'G2', 'evokante'));
        }, 1000);
        setTimeout(function () {
            emitter.emit('game-event', model_1.GameEvent.create('G2 golpea primero', 'Menudo vuelco a la partida, G2 iguala muertes y tumba la primera torre', 'TOWER_DOWN', 'G2', 'mithy'));
        }, 7000);
    };
    LolOnlineGameServer.prototype.getApp = function () {
        return this.app;
    };
    LolOnlineGameServer.PORT = 63000;
    return LolOnlineGameServer;
}());
exports.LolOnlineGameServer = LolOnlineGameServer;
