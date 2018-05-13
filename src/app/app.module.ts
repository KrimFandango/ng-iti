import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ServiceDataService } from './service-data.service';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
//app componet
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

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
