<<<<<<< HEAD
//modules
=======
//Modules
>>>>>>> de532c3ada4236562bffce4a3036143951ae4946
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { RouterModule, Routes } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
=======

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
>>>>>>> de532c3ada4236562bffce4a3036143951ae4946
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegistrationComponent } from './registration/registration.component';

//services
import {GetDataService} from "./get-data.service";


//services
import {GetDataService} from './get-data.service';

const routes: Routes=[  
   {path:"",component:HeaderComponent},
   {path:"Register",component:RegistrationComponent},
   {path:"About",component:AboutusComponent},
  //  {path:"Contact us",component:},
  //  {path:"Log in",component:}
]
@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD

    HeaderComponent,
    FooterComponent,
=======
    LoginComponent,
>>>>>>> de532c3ada4236562bffce4a3036143951ae4946
    AboutusComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
<<<<<<< HEAD
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
=======
    HttpClientModule
  ],
  
>>>>>>> de532c3ada4236562bffce4a3036143951ae4946
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
