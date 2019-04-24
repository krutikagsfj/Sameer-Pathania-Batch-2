import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LimitPipe } from './pipes/dollar.pipe';

import { HttpdataComponent } from './httpdata/httpdata.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LimitPipe,
    HttpdataComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule// modules  to fetch json data
  ],
  providers: [],//services
  bootstrap: [AppComponent]
})
export class AppModule { }
