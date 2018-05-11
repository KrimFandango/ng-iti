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
  constructor(private query: DataService) {
    this.usersData = [];
    this.getUserData();
  }

  //============ get data from json file ==========
  getUserData(): void {
    let path: string = '../assets/userdata.json';
    this.query.getData(path).subscribe(
      res => { this.usersData = res; },
      err => { console.log(err); }
    );
  }

  loginFunc(data: NgForm): void {
    // ========== for loop on userData array to check ==========
    console.log(data);
    // for (var user of this.usersData) {
    //   // console.log(user.password);
    //   if (data.value.email == user.email && data.value.password == user.password) {
    //     console.log("Member!");
    //   }
    //   else {
    //     console.log("not a member");
    //   }
    // }
  }



  ngOnInit() {
  }

}
