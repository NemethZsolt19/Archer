import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundComponent } from './playground/playground.component';
import { BookingsComponent } from './bookings/bookings.component';
import { HomeComponent } from './home/home.component';
import { NewBookingComponent } from './new-booking/new-booking.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'booking', component: BookingsComponent},
  {path: 'new-booking', component: NewBookingComponent},
  {path: 'playground', component: PlaygroundComponent},
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent },
  // {path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }



    

