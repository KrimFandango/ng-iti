//form
import { FormsModule }   from '@angular/forms';
//fontawesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//services
import { HttpClientModule } from '@angular/common/http';
import{ DataService } from './data.service';
//App Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// App Component
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutDataService } from './about-data.service';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule 
  ],
  providers: [AboutDataService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
