import { Component, OnInit } from '@angular/core';
import { NgModel,NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  //register function
  register(data:NgForm):void{
    if(!data.valid){  //check if the data isn't valid
      console.log("error");
    }
    else{ 
     console.log(data);
     
    }
  }


  ngOnInit() {
  }

}
