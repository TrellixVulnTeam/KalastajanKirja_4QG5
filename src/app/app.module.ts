import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { LisaaTapahtumaComponent } from './lisaa-tapahtuma/lisaa-tapahtuma.component';

@NgModule({
  declarations: [
    AppComponent,
    LisaaTapahtumaComponent
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
