import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineUsersService {

  constructor(private http: HttpClient) { }

  findAll() {
    const users: Object [] = [];
    this.http.get<Object[]>('http://localhost:3000/online')
                .subscribe(response => response.forEach(user => users.push(user)));
    return users;
  }
}
