import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GodownComponent } from './godown/godown.component';
import { NewlookComponent } from './newlook/newlook.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { AdminSelectionComponent } from './admin-selection/admin-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    
    GodownComponent,
    NewlookComponent,
    UserSelectionComponent,
    AdminSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
