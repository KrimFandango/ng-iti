import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
public dataRegister:object;
    
  constructor() {
      
     this.dataRegister = {};
  }

    registerForm(data:NgForm){
        if(!data.valid){
            console.log("error");
        }
        else{
            console.log(data);
            console.log(this.dataRegister)
        }
    }
  ngOnInit() {
  }

}
