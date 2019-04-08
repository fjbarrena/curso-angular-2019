export class GameEvent {
    public name: string;
    public description: string;
    public type: string;        // KILL, ASSIST, DEATH, TOWER_DOWN, FIRST_BLOOD, NASHOR_DOWN, NEXUS_DOWN
    public team: string;   
    public starring: string;    
    public timestamp: Date;

    constructor() {
        this.name = '';
        this.description = '';
        this.type = '';
        this.team = '';
        this.starring = '';
        this.timestamp = new Date();
    }

    public static create(name: string, description: string, type: string, team: string, starring: string): GameEvent {
        let event: GameEvent = new GameEvent();

        event.description = description;
        event.name = name;
        event.starring = starring;
        event.team = team;
        event.timestamp = new Date();
        event.type = type;

        return event;
    }
}