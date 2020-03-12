import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashComponent } from './dash/dash.component';
import { CoursesComponent } from './courses/courses/courses.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AuthGuard } from 'src/app/auth.guard';


const routes: Routes = [
  { path: '', component: DashComponent ,canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'cours', component: CoursesComponent,canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent,canActivate: [AuthGuard] },
  { path: 'utilisateur', component: UsersComponent,canActivate: [AuthGuard] },
  { path: 'utilisateur/ajout', component: AddUserComponent ,canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent ,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
