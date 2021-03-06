import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finalTest';
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
    ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

   logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
   }

}
