import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/User';
import { Observable } from 'rxjs';
import { map,tap } from 'rxjs/operators';
import { Task } from './models/task';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  constructor(private http: HttpClient) {

  }

  getUser(name: string, baseUrl: string): Observable<User> {
    return this.http.get<User>(baseUrl + 'api/users/?name=' + name).pipe(tap((e:User) =>e.tasks.map(e=>e.dueDate = new Date(e.dueDate))));
  }
  postTaskToUser(user:User, baseUrl: string):Observable<User>{
    return this.http.post<User>(baseUrl + 'api/users',user );
  }
}
