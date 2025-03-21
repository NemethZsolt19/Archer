import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email=""
  password=""
  emailPassError=false
  emailPassMessage=""

  constructor(private auth:AuthService, private router:Router){}

  signIn(){
    console.log(this.email,"; ",this.password)
    this.auth.signInMailPassword(this.email, this.password).then(
      ()=>this.router.navigate(["spiders"])
    ).catch(
      (e: any)=>{
        if (e.code!=4002){
          this.emailPassError=true
          this.emailPassMessage=e
        }else{
          this.router.navigate(["spiders"])
        }

      }
    )

  }

  forgotPassword(){
    this.auth.forgotPassword(this.email)
  }
}

  // email: string = '';
  // password: string = '';
  // authService = inject(AuthService);
  // router = inject(Router);

  // onSubmit(){
  //   if(this.loginForm.valid){
  //     console.log(this.loginForm.value);
  //     this.authService.login(this.loginForm.value)
  //     .subscribe((data: any) => {
  //       if(this.authService.isLoggedIn()){
  //         this.router.navigate(['/admin']);
  //       }
  //       console.log(data);
  //     });
  //   }
  // }

  // protected loginForm = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required])
  // })


