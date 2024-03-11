import { Component, OnInit } from '@angular/core';
import { usersSchema } from '../modules/users/users.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


allDoners:usersSchema[]=[]
searchKey:string=''

constructor(private api:ServiceService){}
  ngOnInit(): void {
    this.getallDonerslist()
  }


  getallDonerslist(){
this.api.getallDoners().subscribe({
  next:(res:any)=>{
    console.log(res);
    this.allDoners=res
  },
  error:(err:any)=>{
    console.log(err);
    
  }
})
  }


// delete

deleteDoner(id:any){
  this.api.deleteDoners(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.getallDonerslist()
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
}


}
