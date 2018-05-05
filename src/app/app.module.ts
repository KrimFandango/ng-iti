// =============== angular modules ===================
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// =================== bootstrap ======================
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// ================= app components ====================
import { AppComponent } from './app.component';
// ================== services =========================
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
