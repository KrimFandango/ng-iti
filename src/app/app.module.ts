//form
import { FormsModule }   from '@angular/forms';
//fontawesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//services
import { HttpClientModule } from '@angular/common/http';
import{ DataService } from './data.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
