import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
// import { Router } from '@angular/router';
//============= service ==============
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  usersData: Array<any>;
  dataFlag: boolean;
  userFlag: boolean;

  constructor(
    private query: DataService
    // ,private toHome: Router
  ) {
    this.usersData = [];
    this.getUserData();
    this.dataFlag = false;
    this.userFlag = false;
  }

  //============ get data from json file ==========
  getUserData(): void {
    let path: string = '../assets/userdata.json';
    this.query.getData(path).subscribe(
      res => {
        this.usersData = res;
        this.dataFlag = true;
      },
      err => { console.log(err); }
    );
  }

  loginFunc(data: NgForm): void {
    // ========== for loop on userData array to check ==========
    for (var user of this.usersData) {
      if (this.dataFlag = true) {     //data come from server without errors
        if (data.value.email === user.email && data.value.password === user.password) {
          //======== redirect to home page ==========
          // this.redirectToHome();
        }
        else {
          this.userFlag = true;
        }
      }
    }
    if (this.userFlag == true) {
      alert("Sorry, You're not a member!");
    }
  }
  // =============== redirect func ===========
  // redirectToHome(): void {
  //   this.toHome.navigate(['//']);
  // }

  ngOnInit() {
  }
}
