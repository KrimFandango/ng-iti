import { Component, OnInit } from '@angular/core';
import { NgForm , NgModel} from '@angular/forms';

import { HttpClient } from '@angular/common/http';

import { QueryService } from '../query.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  getData: Array<object>;

  formData:object;

  constructor( private q:QueryService) { 
    this.getData=[{}];
    this.getContact();
    this.formData={};
  }

  getContact(): void{
    let path:string='../assets/ContactData.json'
    this.q.getContactData(path).subscribe(
      res=>{
        this.getData =res;
        console.log(res);
      },
      err=>{
        console.log(err);
      },
      );
  }

  contactSubmit(data:NgForm){
    if(!data.valid){
      console.log("error");

    }
    else{
      console.log(data);
      console.log(this.formData);
      data.reset();
    }
    console.log(data);
  }

  ngOnInit() {
  }

}
