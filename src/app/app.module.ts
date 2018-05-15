import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';


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
    FormsModule,

    HttpClientModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
