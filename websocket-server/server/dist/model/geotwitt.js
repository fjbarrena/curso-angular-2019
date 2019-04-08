"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GeoTwitt = /** @class */ (function () {
    function GeoTwitt() {
        this.account = '';
        this.lat = 0.0;
        this.long = 0.0;
        this.content = '';
    }
    GeoTwitt.create = function (account, lat, long, content) {
        var event = new GeoTwitt();
        event.account = account;
        event.lat = lat;
        event.long = long;
        event.content = content;
        return event;
    };
    return GeoTwitt;
}());
exports.GeoTwitt = GeoTwitt;
