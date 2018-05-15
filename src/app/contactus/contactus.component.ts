import { Component, OnInit,ViewChild  } from '@angular/core';
import{ NgForm, NgModel} from '@angular/forms' ;
@Component({


  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit {
  
  constructor(){ }

  conatactfunc(data: NgForm) : void{
console.log(data);
  }
  ngOnInit() {}
}