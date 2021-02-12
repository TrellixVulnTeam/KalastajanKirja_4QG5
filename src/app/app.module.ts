import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FirebaseService } from './services/firebase.service';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireStorageModule} from "@angular/fire/storage";
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angular-firebase-auth-bc'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
