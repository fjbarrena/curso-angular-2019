import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { GamesService } from './services/games.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionService } from './services/champion.service';

@NgModule({
  declarations: [],
  providers: [
    ChampionService,
    GamesService,
    AuthService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }
