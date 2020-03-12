import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {User} from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[] = [];
  t = 1;
  constructor( private userService: UserService ) { }

  ngOnInit(): void {
    this.getUsers();
    console.log(this.users)
  }

  getUsers(){
    this.userService.findAll().subscribe((user) => {
      this.users = user;
    });
  }

  deleteCour(id){
    this.userService.delete(id)
       .subscribe( ()=>{
         this.users = this.users.filter(cours =>cours.id)
       } )
       window.location.reload();
}



}
