import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import {Course} from 'src/app/models/course';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses:Course[] = [];

  constructor( private courseService: CourseService ) { }

  ngOnInit(){
    this.getCourses();
    console.log(this.courses)
    
  }

  getCourses(){
    this.courseService.findAll().subscribe((courses) => {
      this.courses = courses;
    });
  }

  deleteCour(id){
      this.courseService.delete(id)
         .subscribe( ()=>{
           this.courses = this.courses.filter(cours =>cours.id)
         } )
         window.location.reload();
  }



}
