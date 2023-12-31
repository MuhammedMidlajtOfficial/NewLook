import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

    constructor(private user:UserService,private router:Router) { }

    oldPassword:any="";
    newPassword:any="";
    username:any="";

    toggle:boolean=false;


    updatePassword(){
      if(this.oldPassword=="" || this.newPassword=="" || this.username==""){
        alert("Please fill all the fields");
        return;
      }

      const user={
        username:this.username,
        // oldPassword:this.oldPassword,
        password:this.newPassword,
      }
      this.user.updatePassword(user).subscribe((data:any)=>{
        console.log(data);
        if(data.success){
          alert("Password updated successfully");
          this.router.navigate(['/']);
        }else{
          alert("Invalid old password");
        }
      })
    }
    toggleVisiblity(){
      const password:any=document.getElementById("password");
      password.type==="password" ? password.type="text" : password.type="password";
    }
    verifyUserName(){
      this.user.verifyUserName(this.username).subscribe((data:any)=>{
        console.log(data);
        if(data.success){
          this.toggle=true;
          document.getElementById("username")?.setAttribute("disabled","true");
        }else{
          alert("Invalid username");
        }
      })
    }
}
