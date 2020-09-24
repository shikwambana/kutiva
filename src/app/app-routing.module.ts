import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: ':id', component: CompanyprofileComponent },
  { path: 'user/:id', component: UserprofileComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
