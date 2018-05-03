//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { CardsComponent } from './cards/cards.component';
//services
import {QueryService} from './query.service';

//Routes
const routes:Routes =[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignUpComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    CardsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [QueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
