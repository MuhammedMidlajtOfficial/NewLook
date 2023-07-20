import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private user:UserService,private router:Router) { }


  username:string="";
  password:string="";

  login(){
    const user={
      username:this.username,
      password:this.password
    }
    this.user.login(user).subscribe((res:any)=>{
      if(res.success){
        localStorage.setItem("isLogin","true");
        res.admin ? localStorage.setItem("admin","true") : localStorage.setItem("admin","false");
        localStorage.setItem("username",res.data[0].username);
        alert("Login Success");
        this.router.navigate(['/admin-selection']);
      }else{
        alert("Login Failed");
      }
    })
  }

  toggleVisiblity(){
    const password:any=document.getElementById("password");
    password.type==="password" ? password.type="text" : password.type="password";
  }
}
