
export class GeoTwitt {
    public account: string;
    public lat: number;
    public long: number;        
    public content: string;   
   

    constructor() {
        this.account = '';
        this.lat = 0.0;
        this.long = 0.0;
        this.content = '';
    }

    public static create(account: string, lat: number, long: number,
         content: string): GeoTwitt {
        let event: GeoTwitt = new GeoTwitt();

        event.account = account;
        event.lat = lat;
        event.long = long;
        event.content = content;

        return event;
    }
}