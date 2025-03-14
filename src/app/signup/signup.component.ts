import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    // Handle registration logic here
    console.log('Register:', this.email, this.password);
  }
}
