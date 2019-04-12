import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Users } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpoint: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  public login(user: Users){
    localStorage.setItem('LOGGED_USER', JSON.stringify(user));
  }

  public isLoggedIn() {
    return localStorage.getItem('LOGGED_USER') !== null;

  }

  public getLoggedUser() {
    return JSON.parse(localStorage.getItem('LOGGED_USER'));
  }

  public logout(){
    localStorage.removeItem('LOGGED_USER');
  }

}
