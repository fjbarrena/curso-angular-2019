import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Users } from '../models/users.model';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private endpoint: string = 'http://localhost:3000/users';
    private httpOptions: any =  {
        headers: new HttpHeaders({'Content-Type':  'application/json'})
    };

    constructor(private http: HttpClient) {
        this.endpoint
    }

    getUsers(): Observable<Users[]> {
        return this.http.get<Users[]>(this.endpoint);
    }

    getUser(id: number): Observable<Users> {
        return this.http.get<Users>(`${this.endpoint}/${id}`);
    }

    updateUser(user: Users): Observable<any> {
        return this.http.put(`${this.endpoint}/${user.id}`, user, this.httpOptions);
    }

    /*addUser(user: Users): Observable<Users> {
        return this.http.post<Users>(this.endpoint, user, this.httpOptions);
    }*/

    deleteUser (user: Users): Observable<any> {
        return this.http.delete<any>(`${this.endpoint}/${user.id}`, this.httpOptions);
    }

}
