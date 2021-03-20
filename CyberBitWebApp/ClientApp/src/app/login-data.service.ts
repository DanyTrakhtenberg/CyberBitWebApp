import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  constructor(private http: HttpClient) {

  }

  getUser(name: string, baseUrl: string): Observable<User> {
    return this.http.get<User>(baseUrl + 'users/?name=' + name);
  }
  postTaskToUser(user:User, baseUrl: string):Observable<User>{
    return this.http.post<User>(baseUrl + 'users',user );
  }
}
