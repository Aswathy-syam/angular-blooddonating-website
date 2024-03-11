import { Component } from '@angular/core';
import { usersSchema } from '../users.model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent {
  constructor(private api:ServiceService){}

  doner:usersSchema={}


  addDoners(){
const{id,name,mobile,blood,image,place}=this.doner

if(!id||!name||!mobile||!blood||!image||!place){
  alert('please fill the form completely')
}
else{
  alert('succeffully added')
 this.api.addDoner(this.doner).subscribe({
  next:(res:any)=>{
    console.log(res);
    
  },
  error:(err:any)=>{
    console.log(err);
    
  }
 })
}
  }
}
