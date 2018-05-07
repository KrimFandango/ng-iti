import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
// service
import {GetDataService} from '../get-data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  checkData: Array<any>;
  flag:boolean;
  constructor(
    private query: GetDataService,
    private goHome:Router
  ) {
    this.checkData = [];
    this.flag = false;
    this.getLoginData();
   }

  ngOnInit() {
  }

  getLoginData(): void {
    const myPath = '../assets/data/loginData.json';
    this.query.getDataFunc(myPath).subscribe(
      res => {
        this.checkData = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  // for redirect user after check of his existance
  goHomeRedirct():void{
    this.goHome.navigate(["//"]);
  }

  loginData(loginData: NgForm): void {
    if (!loginData.valid) {
      console.log(`You have an error`);
    } else {
      for (const name of this.checkData) {
        if (loginData.value.user_name === name.user_name && loginData.value.password === name.password) {
          console.log(`Member`);
          this.goHomeRedirct();
          this.flag = true;
        }
      }
      if(!this.flag){
        alert(`Invalid user name or password`);
      }
    }
  }

}
