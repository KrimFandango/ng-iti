import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  jsonData:Array<object>;
  constructor(
      private qService : QueryService
  ) {
    this.getJsonData();
   }

  ngOnInit() {
  }

  getJsonData():void{
    let path:string ="../assets/data.json";
    this.qService.getAbout(path).subscribe(
      res =>{
        console.log(res);
        this.jsonData=res;
      },
      err =>{
        console.log(err);
      }
    );
  }

}
