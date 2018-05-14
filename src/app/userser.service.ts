import { Injectable } from '@angular/core';

import{
  Http,
  Response,
  RequestOptions,
  Headers
} from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class UserserService {

  // constructor() { }

users=[];

  constructor(private httpvar:Http) { 
    //this.getUsers(); // call to constructor
  }

// getUsers() {
//    return this.httpvar.request('http://localhost:3000/posts')
//   .map(res => res.json())
    // console.log('dsfsd', this.users);
// }
//   });
// }

getUsers() {
   this.httpvar.request('http://localhost:3000/posts/')   // link of postman dummy server: json text
  .map(res => 
    // console.log(res);
     res.json())
  .subscribe((result) => {
    this.users = result;
    console.log(this.users);
  })
}

  ngOnInit() {
  }


  createUser(title, author)
  {
   let user={
       title,
       author
     }

     let headers : Headers = new Headers({'content-type':'application/json'})
     let opts:RequestOptions = new RequestOptions();
     opts.headers = headers;
  
     this.httpvar.post('http://localhost:3000/posts/', JSON.stringify(user),opts)
     .map((res)=>res.json())
     .subscribe((result:Response)=>{
       console.log('res ',result);
       this.users.push(result);
    });
    
    }


    Updateuser(user)
    {

      let headers:Headers = new Headers({'Content-Type':'application/json'})
      let opts:RequestOptions = new RequestOptions();
      opts.headers = headers;
  
      this.httpvar.put(
               'http://localhost:3000/posts/'+user.id,
        JSON.stringify(user),opts).map((res)=>res.json())
      .subscribe((result:Response) => {
        console.log("user updated",result);
      });
      
      }





    Deleteuser(user)
    {
    return  this.httpvar.delete('http://localhost:3000/posts/'+user.id)
      .subscribe((res) => {
        console.log('user deletd',res);
        let index= this.users.indexOf(user);
        this.users.splice(index,1);
      });
  }

}
