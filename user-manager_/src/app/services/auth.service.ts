import { Injectable } from '@angular/core';

import { Users } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public login(userInfo: Users){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

}
