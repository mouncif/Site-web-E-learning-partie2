import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Router} from "@angular/router"
import {User} from 'src/app/models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  myUser:User = {
    nom: "",
    prenom: "",
    email: "",
    profile: "",
    photo: "",
    password: "",
    adresse: ""
  };
  users:User[] = [];
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }

  persistCours(){
    this.userService.persist( this.myUser).subscribe(
      (user) => this.users = [ user, ...this.users  ]
    )
    this.router.navigate(['utilisateur'])
  }

  onFileChanged(event) {
    const file = event.target.files[0]
  }

}
