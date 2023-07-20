import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-selection',
  templateUrl: './admin-selection.component.html',
  styleUrls: ['./admin-selection.component.css']
})
export class AdminSelectionComponent {
  isAdmin:boolean=false;
  constructor(public user:UserService,private router:Router) { 
    localStorage.getItem("admin") === 'true' ? this.isAdmin=true : this.isAdmin=false;
  }

  logout(){
    localStorage.removeItem("admin");
    localStorage.removeItem("isLogin");
    this.router.navigate(['/']);
  }
}
