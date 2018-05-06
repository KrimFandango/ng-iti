import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceDataService } from './service-data.service';
import { FormsModule }   from '@angular/forms';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ContactUsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
