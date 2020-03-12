import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import {Course} from '../models/course'

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) {

   }

   findAll(){
     return this.http.get<Course[]>("http://localhost:3000/formation")   
  }

  delete(id){
    if(window.confirm('voulez-vous vraiment le suprimer ?')){
      return this.http.delete(`http://localhost:3000/formation/${id}`)
    }
  }

  

}
