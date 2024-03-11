import { Component, OnInit } from '@angular/core';
import { usersSchema } from '../users.model';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
doner:usersSchema={}

constructor(private route:ActivatedRoute,private api:ServiceService){}
  ngOnInit(): void {
    this.singleUser(this.doner.id)
  }

// single user
singleUser(id:any){
this.route.params.subscribe((res:any)=>{
  console.log(res);
  const{id}=res
  console.log(id);
  
this.api.getSingledoner(id).subscribe({
  next:(res:any)=>{
    console.log(res);
    this.doner=res
  },
  error:(err:any)=>{
    console.log(err);
    
  }
})



})
}

// update

getUpdatedoner(){
  this.api.updateDoner(this.doner.id,this.doner).subscribe({
    next:(res:any)=>{
      console.log(res);
      alert('updated successfully')
    },
    error:(err:any)=>{
      console.log(err);
      alert('cannot perfome update')
    }
  })

}



}
