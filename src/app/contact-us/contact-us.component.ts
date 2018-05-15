import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel} from '@angular/forms'; 
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
FormData:object={};

  constructor() {
    this.FormData={
      User_name:"",
      User_number:"",
      User_email:"",
      User_msg:""
    };
   }

  ngOnInit() {
  }

  contact(data:NgForm):void
  {
    if(!data.valid)
      {
        console.log("error");          
        
      }
      else
        {
        console.log(this.FormData);
        
        }
  }
}
