//fontawesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//services
import { HttpClientModule } from '@angular/common/http';
//App Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
// App Component
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutDataService } from './about-data.service';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HappyclientsComponent } from './happyclients/happyclients.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =  [
  { path: "", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutUsComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HappyclientsComponent,
    RegisterComponent,
    LoginComponent 

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule,
    RouterModule
  ],
  providers: [AboutDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
