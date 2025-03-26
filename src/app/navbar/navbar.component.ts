import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  user:any
  constructor(private auth:AuthService){
    this.auth.getLoggedUser().subscribe(
      (user)=>this.user=user
    )
  }
  
  logout(){
    this.auth.signOut()
      .then(()=>console.log("Kiléptél!"))
      .catch(()=>console.log("Hiba a kilépésnél!"))
  }
}
