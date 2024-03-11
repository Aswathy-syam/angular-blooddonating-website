import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allDoners:any=[],searchTerm:string,property:string): any[] {

    //array to hold transformed values
    let result:any=[]
  
  if(!allDoners||searchTerm===""||property===""){
  return allDoners
  }
  else{
    allDoners.forEach((item:any)=>{
    if(item[property].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())){
  result.push(item)
    }
  })
    
  
  }
  
    return result;
  }

}
