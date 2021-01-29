import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { FirebaseService } from './services/firebase.service';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBVJQ8tXHI9gaVw7MqCeKn_rx6j4G3mS5E",
      authDomain: "angular-firebase-auth-bc.firebaseapp.com",
      projectId: "angular-firebase-auth-bc",
      storageBucket: "angular-firebase-auth-bc.appspot.com",
      messagingSenderId: "976613960319",
      appId: "1:976613960319:web:a3cd0d4c717d55b3e96d4a"
    }),
    RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
