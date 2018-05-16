import { Component, OnInit } from '@angular/core';
import { NgForm , NgModel } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  touched:boolean;
  // registerationForm: NgForm;
  dataForm: object;
  constructor() { 
    this.touched=false;
     this.dataForm={};
     


  }
   register(data: NgForm):void{
     if(!data.valid){
       console.log("Error")
     }
     else{
       console.log(data);
       console.log(this.dataForm)
      }
   }

  ngOnInit() {
  }  

}
