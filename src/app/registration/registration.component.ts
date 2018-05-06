import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { QueryService } from '../query.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  invalid_match: boolean;
  dataObj = {
    email: '',
    username: '',
    password: '',
    passwordRetyped: ''
  };
  constructor() {
    this.invalid_match = false;
  }
  ngOnInit() {
  }
  addNewUser(form: NgForm): void {
    console.log(this.dataObj);
    console.log(form);
    if (this.dataObj.password !== this.dataObj.passwordRetyped) {
      this.invalid_match = true; // true is entered password and retype password is not matched
    } else {
      this.invalid_match = false;
    }
  }
  resetFlag(): void {
    // resets invalid_match flag to bind the error message while user is typing
    this.invalid_match = false;
  }
}
