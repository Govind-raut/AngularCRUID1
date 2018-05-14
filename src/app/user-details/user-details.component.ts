import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { UserserService } from '../userser.service';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

@Input() user;

  @Output() gotoparent = new EventEmitter;

  constructor(private userserservice:UserserService){}
  
  createUser(){
    if(this.user.id)
    {
      this.userserservice.Updateuser(this.user)
    }
    else{
      this.userserservice.createUser(this.user.title,this.user.author)      
    }
    this.gotoparent.emit();
  }



//   hidecomponent()
// {
//   this.ngIf = false;
//   console.log("button clicked");
// }


  ngOnInit() {
  }

}
