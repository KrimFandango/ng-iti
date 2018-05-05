import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ServiceDataService } from './service-data.service';


import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ContactUsComponent } from './contact-us/contact-us.component';
=======
import { AboutComponent } from './about/about.component';
>>>>>>> 89a621dea64fe9c11edf4405b11bc4ae7cb1087c


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ContactUsComponent
=======
    AboutComponent
>>>>>>> 89a621dea64fe9c11edf4405b11bc4ae7cb1087c
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [ServiceDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
