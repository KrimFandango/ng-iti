import { Component, OnInit } from '@angular/core';
//form
import { NgForm, NgModel } from '@angular/forms';
//service
import { DataService } from '../data.service';
// import {NgModel} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  //form variable
  dataForm: object;
  //services variable
  contactData: Array<object>;
  constructor(
    private data: DataService
  ) {
    this.contactData = [];
    this.getContactData();
    this.dataForm = {};
  }

  //services
  getContactData(): void {
    let path: string = ' ./assets/data.json';
    this.data.getData(path).subscribe(
      res => {
        this.contactData = res;
        // console.log(res);
      },
      err => {
        console.log(err);
      },
      () => { }
    );

  }

//email validation
  x(d) {
    console.log(d)
    return JSON.stringify(d)
  }

  checkEmail(email): boolean {
    let pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    console.log(pattern.test(email))
    if(pattern.test(email)==false)
    {
      var elem = document.getElementById('mail');
      elem.classList.add('border-danger');
    }
    return pattern.test(email);
  }


  // form

  contact(data: NgForm): void {
    if (!data.valid) {
      console.log("error");
    }
    else {
      console.log(data);
      console.log(this.dataForm);
    }


  }



  ngOnInit() {
  }

}
