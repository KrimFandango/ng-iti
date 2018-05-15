//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from './get-data.service';


//components
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProfileComponent } from './profile/profile.component';
import { QueryService } from './query.service';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GetDataService],
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
