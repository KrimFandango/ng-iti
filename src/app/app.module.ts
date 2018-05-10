// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

//components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

//services
import {GetDataService} from './get-data.service';


const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'Register', component: RegistrationComponent },
  { path: 'About', component: AboutusComponent },
  //  {path:"Contact us",component:},
  {path:"Login",component:LoginComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AboutusComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    FormsModule,
    GetDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
