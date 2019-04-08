import { ChatServer } from './chat-server';
import { LolOnlineGameServer } from './lol-online-game-server';
import { GeoTwittServer } from './geotwitt-server';

let app = new ChatServer().getApp();
let app2 = new LolOnlineGameServer().getApp();
let app3 = new GeoTwittServer().getApp();

export { app2 };
export { app };
export { app3 }