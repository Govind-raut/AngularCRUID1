import { Component } from '@angular/core';

import {UserserService} from './userser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
users=[]; 

userToUpdate;

constructor(private userserservice:UserserService){}

showdialog = false;


showbutton(user)
{
if(user)
{
this.userToUpdate=user;
}else{
this.userToUpdate={};
}
  this.showdialog=true;
} 


hidecomponent()
{
  this.showdialog=false;
}


getUsers()
{
  this.userserservice.getUsers();  
}

Deleteuser(user)
{
  this.userserservice.Deleteuser(user);
}
  
}



