import { ChampionService } from './services/champion.service';
import { AuthGuard } from './services/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { StatsComponent } from './stats/stats.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { ChampionsComponent } from './champions/champions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomBorderDirective } from './custom-border.directive';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    StatsComponent,
    DashboardComponent,
    GameDetailComponent,
    ChampionsComponent,
    CustomBorderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    ChampionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
