import { LoginDTO } from './../../shared/model/LoginDTO';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserToken = '';

  constructor(
    private readonly http: HttpClient
  ) { }

  public isAuthenticated() {
    if (this.currentUserToken !== '') {
      return true;
    } else {
      return false;
    }
  }

  public getCurrentUserToken(): string {
    return this.currentUserToken;
  }
  public login(email: string, password: string): Observable<any> {
    const loginData: LoginDTO = new LoginDTO();

    loginData.email = email;
    loginData.password = password;

    const res = this.http.post<any>('http://localhost:3000/auth/login', loginData);

    res.subscribe(
      (token: any) => {
        this.currentUserToken = token.access_token;
      },
      (error) => {
        this.currentUserToken = '';
      }
    );

    return res;
  }
}
