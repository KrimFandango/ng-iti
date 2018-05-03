import { Component, OnInit } from '@angular/core';
import {QueryService} from '../query.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeData:Object;
  constructor(private q:QueryService) { 
    this.homeData={};
    this.getProfileData();
  }
  getProfileData():void{
    let path:string='././assets/home.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.homeData=res;},
      err => {console.log(err);},
    );
  }

  ngOnInit() {

  }

}
