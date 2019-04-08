"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent = /** @class */ (function () {
    function GameEvent() {
        this.name = '';
        this.description = '';
        this.type = '';
        this.team = '';
        this.starring = '';
        this.timestamp = new Date();
    }
    GameEvent.create = function (name, description, type, team, starring) {
        var event = new GameEvent();
        event.description = description;
        event.name = name;
        event.starring = starring;
        event.team = team;
        event.timestamp = new Date();
        event.type = type;
        return event;
    };
    return GameEvent;
}());
exports.GameEvent = GameEvent;
