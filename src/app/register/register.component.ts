import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
userData:object;
  constructor() {
  this.userData={};
  }
  submit(data:NgForm):void
  {
    if(data.valid){
      console.log(this.userData);
      console.log(data);
    }
  }
  ngOnInit() {
  }

}
