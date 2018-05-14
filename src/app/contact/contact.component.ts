import { Component, OnInit } from '@angular/core';
//form
import { NgForm , NgModel } from '@angular/forms';
//service
import{ DataService } from'../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  dataForm :object;
  contactData:Array<object>;

  constructor( 
    private data : DataService
  ) {
    this.contactData=[];
    this.getContactData();
    this.dataForm={};
   }




   getContactData():void{
    let path : string =' ././assets/companyData.json';
    this.data.getData(path).subscribe(
      res => {
        this.contactData=res;
      },
      err => {
        console.log(err);
      },
    );
    
  }

  
  


contact( data : NgForm ):void{
  if(!data.valid)
  {
    console.log("error");
    alert("Please enter valid values")
  } 
  else{
    console.log(data);
    console.log(this.dataForm);
  }
}

  ngOnInit() {
  }

}
