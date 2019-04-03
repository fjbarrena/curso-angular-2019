import { ChampionDTO } from './../model/ChampionDTO';
import { ChampionService } from './../services/champion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
  champData: any[];

  id: any;
  name: any;
  title: any;

  constructor(private readonly championService: ChampionService) { }

  ngOnInit() {

    this.championService.getChampions().subscribe(
      (result: ChampionDTO[]) => {
        console.log(result);
      }
    );
  }

  loadData() {
    this.champData = this.championService.getProcessedData();
  }

  createRandomChampion() {
    this.championService.createChampion(666, 'Federico', 'El terror de Teruel');
  }

  createYourOwnChampion() {
    this.championService.createChampion(this.id, this.name, this.title);

    this.id = '';
    this.name = '';
    this.title = '';
  }

}
