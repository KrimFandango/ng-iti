import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
=======
import { HttpClientModule } from '@angular/common/http';
import { ServiceDataService } from './service-data.service';


import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
>>>>>>> e96499d264bc6be8ef16cc5f56f687b08a560ddc


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    RegisterComponent
=======
    ContactUsComponent,
    AboutComponent
>>>>>>> e96499d264bc6be8ef16cc5f56f687b08a560ddc
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
<<<<<<< HEAD
    FormsModule
=======
    HttpClientModule
>>>>>>> e96499d264bc6be8ef16cc5f56f687b08a560ddc
  ],
  providers: [ServiceDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
