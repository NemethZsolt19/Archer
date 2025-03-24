import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username=""
  email=""
  password=""
  passwordAgain=""

  emailPassError=false
  emailPassMessage=""


  constructor(private auth:AuthService, private router:Router){}

signUpMailPassword(){
  console.log(this.email,"; ",this.password)
  this.auth.signUpMailPassword(this.email, this.password)
}

// public onSubmit() {
//   if (this.signupForm.valid) {
//     console.log(this.signupForm.value);
//     this.authService.signup(this.signupForm.value)
//       .subscribe({
//         next: (data: any) => {
//           console.log(data);
//           this.router.navigate(['/login']);
//         },
//         // error: (err) => console.log(err)
//       });
//     }
//   }

  public signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  signGoogle(){
    this.auth.signGoogleAuth()
  }

}



