import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
userData:object;
  constructor() {
  this.userData={}; }
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
