import { ChampionsComponent } from './champions/champions.component';
import { AuthGuard } from './services/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesComponent } from './games/games.component';
import { StatsComponent } from './stats/stats.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'champions',
    component: ChampionsComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'games/:gameId',
    component: GameDetailComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
