// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegistrationComponent } from './registration/registration.component';

// Services
import {GetDataService} from './get-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutusComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    FormsModule,
    GetDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
