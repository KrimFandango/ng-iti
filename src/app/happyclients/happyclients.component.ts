import { Component, OnInit } from '@angular/core';
import { AboutDataService } from '../about-data.service';

@Component({
  selector: 'app-happyclients',
  templateUrl: './happyclients.component.html',
  styleUrls: ['./happyclients.component.scss']
})
export class HappyclientsComponent implements OnInit {
  returneddata : Array <any>;
  CREATIVITY : Number;
  imagePath:string;
  CLIENTS:Number;
  PRODUCTS:number;
  HOURS:Number;

  constructor(private myData : AboutDataService) {
    this.getMyData();    
   }

  ngOnInit() {
  }
  getMyData():void{
    let path :string = './assets/data2.json'
    this.myData.getData(path).subscribe(res=> {
      this.imagePath= res["imagePath"];
      this.CREATIVITY= res["CREATIVITY"];
      this.CLIENTS= res["CLIENTS"];
      this.PRODUCTS= res["PRODUCTS"];
      this.HOURS= res["HOURS"]
    }
    , err=> console.log(err) , ()=>{})
  }
}
