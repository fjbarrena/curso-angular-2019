
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ChampionDTO } from '../../shared/model/ChampionDTO';
@Injectable({
    providedIn: 'root'
})
export class ChampionService {
    proccesedData: any[] = [];

    constructor(private readonly http: HttpClient) {
        this.getChampions();
    }

    getProcessedData(): any[] {
        return this.proccesedData;
    }

    getChampions(): Observable<ChampionDTO[]> {
        const result = this.http.get<ChampionDTO[]>
            ('http://localhost:3000/champions');

        result.subscribe( (data: ChampionDTO[]) => {
            data.forEach((item) => {
                this.http.get<any>
                    ('http://localhost:3000/champ-static-data/' + item.id).subscribe((data2: any) => {
                        this.proccesedData.push(
                            {
                                id: item.id,
                                key: data2.key,
                                name: data2.name,
                                title: data2.title,
                                portraitUrl: 'https://www.mobafire.com/images/champion/icon/' + data2.key + '.png'
                            }
                        );
                    });
            });
        });

        return result;
    }

    createChampion(id: number, name: string, title: string) {
        const newChamp: ChampionDTO = new ChampionDTO();

        newChamp.active = true;
        newChamp.botEnabled = true;
        newChamp.botMmEnabled = true;
        newChamp.freeToPlay = true;
        newChamp.id = id;
        newChamp.rankedPlayEnabled = true;

        this.http.post('http://localhost:3000/champions', newChamp).subscribe(
            (res: any) => {
                console.log("Campeón creado correctamente - Fase 1");
            },
            (error: any) => {
                console.log("Error1", error);
            }
        );

        this.http.post('http://localhost:3000/champ-static-data',
            {
                image: {
                full: name + '.png',
                group: "champion",
                sprite: "champion0.png",
                h: 48,
                w: 48,
                y: 0,
                x: 288
                },
                title: title,
                id: id,
                key: name,
                name: name
            }
        ).subscribe(
            (res: any) => {
                console.log("Campeón creado correctamente - Fase 2");
            },
            (error: any) => {
                console.log("Error2", error);
            }
        );
    }

    getChampionData(): Observable<any> {
        return this.http.get<any>('http://localhost:3000/champ-static-data-extended');
    }

}
