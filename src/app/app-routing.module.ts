import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { GodownComponent } from './godown/godown.component';
import { NewlookComponent } from './newlook/newlook.component';
import { AdminSelectionComponent } from './admin-selection/admin-selection.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';

const routes: Routes = [
  {path:"login",component:LoginPageComponent},
  {path:"admin-selection",component:AdminSelectionComponent},
  {path:"user-selection",component:UserSelectionComponent},
  {path:"godown",component:GodownComponent},
  {path:"newlook",component:NewlookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
