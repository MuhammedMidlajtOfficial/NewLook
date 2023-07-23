import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
 constructor(private user:UserService) {
  this.getAllUsers()
  }
  username:any="";
  password:any="";

  users:any=[];

  getAllUsers(){
    this.user.getAllUsers().subscribe((data:any)=>{
      console.log(data);
      this.users=data.data.map((user:any) =>{
        return {username:user.username,id:user._id}
      });
    })
  }

  addUser(){

    if(this.username=="" || this.password==""){
      alert("Please fill all the fields");
      return;
    }
    const isAlready = this.users.find((user:any)=>{
      return user.username==this.username;
    })
    if(isAlready){
      alert("Username already exists");
      return;
    }
    if(!isAlready){
      alert("User Added Successfully");
      return;
    }
    const user={
      username:this.username,
      password:this.password,
    }
    this.user.addUser(user).subscribe((data:any)=>{
      this.getAllUsers();
    })
  }

  deleteUser(username:any){
    console.log(username);
    this.user.deleteUser(username).subscribe((data:any)=>{
      this.getAllUsers();
      
    })
  }
  toggleVisiblity(){
    const password:any=document.getElementById("password");
    password.type==="password" ? password.type="text" : password.type="password";
  }
}
