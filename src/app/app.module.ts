import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD


import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
=======
import { ServiceDataService } from './service-data.service';
import { RouterModule, Routes } from '@angular/router';
//app componet
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

// router
const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'home' , component: HomeComponent} ,
  { path: 'contact' , component: ContactUsComponent},
  { path: 'about' , component: AboutComponent},
  { path: 'register' , component: RegisterComponent},
>>>>>>> 6fe9c5c8de4dd9ebc579bc0aafb67a02e703d3c3


];
@NgModule({

  declarations: [
    AppComponent,
<<<<<<< HEAD
    RegisterComponent,
    ContactUsComponent,
    AboutComponent
=======
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    AboutComponent,
    NavComponent,
    HomeComponent, 
>>>>>>> 6fe9c5c8de4dd9ebc579bc0aafb67a02e703d3c3

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
<<<<<<< HEAD
    FormsModule,

    HttpClientModule
=======
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
>>>>>>> 6fe9c5c8de4dd9ebc579bc0aafb67a02e703d3c3
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
