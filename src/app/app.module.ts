import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { AboutDataService } from './about-data.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AngularFontAwesomeModule 
  ],
  providers: [AboutDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
