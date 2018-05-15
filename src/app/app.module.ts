import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { QueryService } from './query.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProfileComponent
  ],
  
  providers: [QueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
