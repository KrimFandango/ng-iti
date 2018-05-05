// =============== angular modules ===================
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// =================== bootstrap ======================
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// ================= app components ====================
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// ================== services =========================
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
