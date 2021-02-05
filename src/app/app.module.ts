import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from  '@angular/material/core'
import { MatMomentDateModule } from '@angular/material-moment-adapter'
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations'
import { MatCheckboxModule } from '@angular/material/checkbox';



import { AppComponent } from './app.component';
import { LisaaTapahtumaComponent } from './lisaa-tapahtuma/lisaa-tapahtuma.component';

@NgModule({
  declarations: [
    AppComponent,
    LisaaTapahtumaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatCheckboxModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
