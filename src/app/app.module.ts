//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

=======
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
>>>>>>> fec52acdf00a400875dde3c26d06003283742858

import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from './get-data.service';


//components
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { FooterComponent } from './footer/footer.component';
=======
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProfileComponent } from './profile/profile.component';
import { QueryService } from './query.service';

>>>>>>> fec52acdf00a400875dde3c26d06003283742858


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    Section2Component,
    Section3Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()  
=======
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
>>>>>>> fec52acdf00a400875dde3c26d06003283742858
  ],
  
  providers: [QueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
