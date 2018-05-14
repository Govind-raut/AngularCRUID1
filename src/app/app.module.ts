import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {UserserService} from './userser.service';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
