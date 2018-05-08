import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public data : object;
  constructor( private route: Router ) {
  }
    
  redirectToHome (){
    this.route.navigate([''])
      }
  ngOnInit() {
  }
  login(data: NgForm){
    console.log(data) 
    data.reset()
   }


    loginSubmit(data:NgForm){
      
      if (!data.valid) {
        console.log("error");
      }
      else
      {
        console.log("Form Submitted!");
        data.reset();
        this.route.navigate(['//'])

      }
       console.log(data);

    }
}
