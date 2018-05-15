// =============== angular modules ===================
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// =================== bootstrap ======================
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// ================= app components ====================
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeContentComponent } from './home-content/home-content.component';

// ================== services =========================
import { DataService } from './data.service';




const appRoutes: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register',      component: RegisterComponent },
  { path: 'contact',      component: ContactComponent },
  { path: 'about',      component: AboutComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,    
    CarouselComponent,   
    HomeContentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
