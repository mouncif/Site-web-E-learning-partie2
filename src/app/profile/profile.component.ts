import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import {User} from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUserOnline: User;
  profileAdmin:any = [];
  constructor(private profileservice: ProfileService,private authenticationService: AuthenticationService,) {
    this.currentUserOnline = this.authenticationService.currentUserValue;
   }

  ngOnInit(): void {
    this.getProfile();
    console.log(this.profileAdmin) 
  }

  getProfile(){
      this.profileservice.findInfo().subscribe((profile) => {
      this.profileAdmin = profile;
      console.log(this.profileAdmin) 
    });
  }

}
