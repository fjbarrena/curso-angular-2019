"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var express = require("express");
var socketIo = require("socket.io");
var model_1 = require("./model");
var GeoTwittServer = /** @class */ (function () {
    function GeoTwittServer() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }
    GeoTwittServer.prototype.createApp = function () {
        this.app = express();
    };
    GeoTwittServer.prototype.createServer = function () {
        this.server = http_1.createServer(this.app);
    };
    GeoTwittServer.prototype.config = function () {
        this.port = process.env.PORT || GeoTwittServer.PORT;
    };
    GeoTwittServer.prototype.sockets = function () {
        this.io = socketIo(this.server);
    };
    GeoTwittServer.prototype.listen = function () {
        var _this = this;
        this.server.listen(this.port, function () {
            console.log('Running GeoTwittServer on port %s', _this.port);
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
    GeoTwittServer.prototype.emitTwittIn = function (millis) {
        var _this = this;
        var emitter = this.io;
        setTimeout(function () {
            emitter.emit('geo-twitt', model_1.GeoTwitt.create('@DogDeveloper', _this.generateRandomLatLong(), _this.generateRandomLatLong(), 'Hola caracola'));
        }, millis);
    };
    GeoTwittServer.prototype.generateRandomLatLong = function () {
        return Math.random() * (40 - 0) + 40;
    };
    GeoTwittServer.prototype.generateRandomTime = function () {
        return Math.random() * (60000 - 30000) + 30000;
    };
    /* emite los mismos eventos siempre, es para jugar :D */
    GeoTwittServer.prototype.emitEvents = function () {
        for (var i = 0; i <= 3000; i++) {
            this.emitTwittIn(this.generateRandomTime());
        }
    };
    GeoTwittServer.prototype.getApp = function () {
        return this.app;
    };
    GeoTwittServer.PORT = 62000;
    return GeoTwittServer;
}());
exports.GeoTwittServer = GeoTwittServer;
