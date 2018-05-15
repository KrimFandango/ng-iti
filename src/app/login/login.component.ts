import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  public dataForm: object;
           text:string;

  constructor() { 
    this.dataForm = {};
    this.text="";
  }


  login(data: NgForm): void {

    if (!data.valid) {
        console.log('error')
    } else {
        console.log(data);
        console.log(this.dataForm);
    }

}

}