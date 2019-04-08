import { ChampionService } from './../../core/services/champion.service';
import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private readonly authService: AuthService,
              private readonly championService: ChampionService) { }

  ngOnInit() {

  }

  getChampions() {
    this.championService.getChampions().subscribe(
      (success: any) => {
        console.log(success);
      },
      (error) => {
        console.log('Unauthorized');
      }

    )
  }
  signIn() {
    this.authService.login(
      this.email,
      this.password
    ).subscribe(
      (success: any) => {
        console.log('Login correcto y token: ' + success.access_token);
      },
      (error: any) => {
        console.log('Login incorrecto');
      }
    )
  }

}
