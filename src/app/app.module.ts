//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { GetDataService } from './get-data.service';



//components
import { AppComponent } from './app.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { FooterComponent } from './footer/footer.component';
import { QueryService } from './query.service';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';



const routes: Routes= [
  {path:'', component:HomeComponent},
  {path:'About', component:AboutComponent},
  {path:'Profile', component:ProfileComponent},
  {path:'Login', component:LoginComponent},
  {path:'Registration', component: RegisterComponent},
  {path:'Contact us', component: ContactusComponent},
  
  
]
@NgModule({
  declarations: [
    AppComponent,
    Section2Component,
    Section3Component,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    ContactusComponent,
    ProfileComponent,
    LoginComponent,
    AboutComponent,
    SliderComponent,
    HomeComponent,
    ServicesComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule  ,
    RouterModule.forRoot(routes)
  ],
  
  providers: [QueryService, GetDataService,QueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
