import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {SigninService} from './signin.service';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { QueryService } from './query.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [SigninService],
    ProfileComponent
  ],
  
  providers: [QueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
