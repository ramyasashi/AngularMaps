import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { User } from './userDetails';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  usersList: User[] = [
    {
      email: 'ramyakrishna676@gmail.com',
      password: 'ramya676',
      role: 'admin'
    }
  ];
  url = 'http://localhost:3000/users';
  
  constructor(private http: HttpClient) { }

  getUsersList(): Observable<any> {
    return  this.http.get(this.url).pipe(delay(100));
  }
  login(email: string, pass: string) {
    // this.loggedIn = true;
    for (const user of this.usersList) {
      if ((email === user.email) && (pass === user.password)) {
        return user.role;
      }
    }
    return false;
  }
}
