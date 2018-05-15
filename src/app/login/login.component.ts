import {Component, OnInit} from '@angular/core';
import {NgForm,NgModel} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public dataForm: object;
           profileData:Array<string>;
           text:string;

    constructor() {
        this.dataForm = {};
        this.profileData =[];
        this.text="";
    }

    login(data: NgForm): void {

        if (!data.valid) {
            console.log('error')
        } else {
            console.log(data);
            console.log(this.dataForm);
        }
    }
    
  
    Welcome(){
        
        return this.text="Hello" + " " + this.dataForm["Email"];
    }
    ngOnInit() {

    }

}