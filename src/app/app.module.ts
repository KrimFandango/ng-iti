//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegistrationComponent } from './registration/registration.component';


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

    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
