import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MovieService } from './services/movie.service'
import { AppComponent } from './app.component';
import { Secrets } from './../secrets'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MovieService, Secrets],
  bootstrap: [AppComponent]
})
export class AppModule { }
