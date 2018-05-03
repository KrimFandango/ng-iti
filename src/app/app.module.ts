import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {QueryService} from './query.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes =[
  {path:'',component:HomeComponent},
  {path:'signUp',component:SignUpComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [QueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
