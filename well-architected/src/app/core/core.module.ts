import { GamesService } from './services/games.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionService } from './services/champion.service';

@NgModule({
  declarations: [],
  providers: [
    ChampionService,
    GamesService
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
