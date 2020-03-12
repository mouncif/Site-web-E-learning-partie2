import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import {User} from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`http://localhost:3000/users`);
}

  findAll(){
    return this.http.get<User[]>("http://localhost:3000/users")   
 }

 delete(id){
  if(window.confirm('voulez-vous vraiment le suprimer ?')){
    return this.http.delete(`http://localhost:3000/users/${id}`)
  }
}

 persist(cours){
  return this.http.post<User>(`http://localhost:3000/users`,cours)
}
}
