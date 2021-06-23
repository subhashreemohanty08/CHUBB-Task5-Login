import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData:Array<any>=[];

  constructor(private http:HttpClient) { }
  addUser(data:any){
    return this.http.post(`https://60c7623a06f3160017d293ce.mockapi.io/users`,data)
  }
  returnUser(){
    return this.http.get(`https://60c7623a06f3160017d293ce.mockapi.io/users`)
  }
  returnUserById(id:number){
    //return this.userData.find(p=>p.id==id)
    return this.http.get(`https://60c7623a06f3160017d293ce.mockapi.io/users/${id}`)
  }
  updateUserById(id:any,data:any){
    // let index=this.userData.findIndex(p=>p.id==id);
     //data.id=id;
     //this.userData[index]=data;
     return this.http.put(`https://60c7623a06f3160017d293ce.mockapi.io/users/${id}`,data)
   } 
}
