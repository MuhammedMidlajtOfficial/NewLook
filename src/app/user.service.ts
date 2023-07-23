import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

isLogin:boolean=false;
isAdmin:boolean=false;

  constructor(private http:HttpClient) { 
    if(localStorage.getItem("admin")!=null){
      localStorage.getItem("admin") === 'true' ? this.isLogin=true : this.isLogin=false;
      localStorage.getItem("admin") === 'true' ? this.isAdmin=true : this.isAdmin=false;
    }
  }

  login(user:any){
    return this.http.post("http://localhost:3000/user/login",user)
  }
  getAllUsers(){
    return this.http.get("http://localhost:3000/user/getAllUsers")
  }
  addUser(user:any){
    return this.http.post("http://localhost:3000/user/addUser",user)
  }
  deleteUser(username:any){
    return this.http.post('http://localhost:3000/user/deleteUser',{id:username})
  }
  updatePassword(user:any){
    return this.http.post('http://localhost:3000/user/editUser',user)
  }
  verifyUserName(username:any){
    return this.http.post('http://localhost:3000/user/isUserExists',{username:username})
  }

}
