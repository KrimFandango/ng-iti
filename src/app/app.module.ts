import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from './get-data.service';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
=======
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
>>>>>>> 45dade8041fe544b1ceb4066b8df7c4a51f481e6


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GetDataService],
=======
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
>>>>>>> 45dade8041fe544b1ceb4066b8df7c4a51f481e6
  bootstrap: [AppComponent]
})
export class AppModule { }
