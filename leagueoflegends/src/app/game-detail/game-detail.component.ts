import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  private games = [
    {id: 1, result: '17-2', win: false},
    {id: 2, result: '4-8', win: true},
    {id: 3, result: '2-2', win: false},
    {id: 4, result: '1-2', win: true},
  ];

  currentGame: any;

  constructor(private readonly router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe( (res: Params) => {
      console.log("Game id recibido: " + res.gameId);

      let receivedGameId: number = res.gameId as number;

      this.currentGame = this.games[receivedGameId - 1];
    });
  }
}
