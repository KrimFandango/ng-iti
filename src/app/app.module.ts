import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
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


];
@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    AboutComponent,
    NavComponent,
    HomeComponent, 

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ServiceDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
