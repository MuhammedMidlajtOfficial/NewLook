import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { GodownComponent } from './godown/godown.component';
import { NewlookComponent } from './newlook/newlook.component';
import { AdminSelectionComponent } from './admin-selection/admin-selection.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { AuthGuard } from './auth-graud.guard'; 
import { AuthGuardAdmin } from './auth-graud-admin.guard'; 
import { UserListComponent } from './user-list/user-list.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {path:"",component:LoginPageComponent,},
  {path:"admin-selection",component:AdminSelectionComponent,canActivate: [AuthGuard]},
  {path:"user-selection",component:UserSelectionComponent,canActivate: [AuthGuard]},
  {path:"godown",component:GodownComponent,canActivate: [AuthGuard,AuthGuardAdmin]},
  {path:"store/:name",component:NewlookComponent,canActivate: [AuthGuard]},
  {path:'user-list',component:UserListComponent,canActivate: [AuthGuard,AuthGuardAdmin]},
  {path:'change-password',component:ChangePasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
