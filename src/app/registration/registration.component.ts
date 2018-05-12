import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


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
  constructor(private router: Router) {
    this.invalid_match = false;
  }
  ngOnInit() {
  }
  addNewUser(form: NgForm): void {
    console.log(this.dataObj);
    // console.log(form);
    this.invalid_match = (this.dataObj.password !== this.dataObj.passwordRetyped) ? true : false;
    if (form.submitted && form.valid && !this.invalid_match) {
      this.router.navigate(['']);
    }
  }
  resetFlag(): void {
    // resets invalid_match flag to bind the error message while user is typing
    this.invalid_match = false;
  }
}
