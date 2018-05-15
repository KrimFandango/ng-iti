import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usersData: Array<object>;
  flag: boolean;
  constructor(private query: DataService) {
    this.usersData = [];
    this.getUserData();
    this.flag = false;
  }

  //============ get data from json file ==========
  getUserData(): void {
    let path: string = '../assets/userdata.json';
    this.query.getData(path).subscribe(
      res => {
        this.usersData = res;
        this.flag = true;
      },
      err => { console.log(err); }
    );
  }

  loginFunc(data: NgForm): void {
    // ========== for loop on userData array to check ==========
    console.log(data);
    for (var user of this.usersData) {
      // console.log(user.password);
      if (this.flag = true) {
        if (data.value.email == user.email && data.value.password == user.password) {
          console.log("Member!");
          //======== redirect to home page ==========
        }
        else {
          console.log("not a member");
        }
      }
    }
  }



  ngOnInit() {
  }

}
