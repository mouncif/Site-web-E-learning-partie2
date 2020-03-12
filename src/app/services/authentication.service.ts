import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) { 
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email, password) {
    return this.http.get<any>(`http://localhost:3000/users?email=${email}&password=${password} `)
        .pipe(map(user => {
            if (user.length) {
            console.log('user loggedin',user)
              localStorage.setItem('currentUser', JSON.stringify(user[0]));
              this.currentUserSubject.next(user[0]);
              return user[0];
          }       
        }));
}

logout() {
  localStorage.removeItem('currentUser');
  this.currentUserSubject.next(null);
}

}