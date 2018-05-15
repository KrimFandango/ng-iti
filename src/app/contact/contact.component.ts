import { Component, OnInit } from '@angular/core';
//form
import { NgForm, NgModel } from '@angular/forms';
//service
import { AboutDataService } from '../about-data.service';

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
    private data : AboutDataService
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
  
// form
contact( data : NgForm ):void{
  if(!data.valid)
  {
    console.log("error");
  } 
  else{
    console.log(data);
    console.log(this.dataForm);
  }
}
  ngOnInit() {
  }

}
