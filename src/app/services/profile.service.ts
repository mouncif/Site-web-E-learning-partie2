import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  findInfo(){
    return this.http.get("http://localhost:3000/admin");
  }
}
