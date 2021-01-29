import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  isSignedIn = false;
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {

  }
  async onSignup(email: string, password: string){
    await this.firebaseService.signup(email, password);
    if (this.firebaseService.isLoggedIn){
      this.isSignedIn = true;
    }
  }
  handleLogout(){
    this.isSignedIn = false;
  }
}
