import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  profileData:Array<string>;
  constructor(private query:GetDataService) {
      this.profileData=[];
      this.getProfile();
  
  
  }
    
  getProfile():void{
      let path:string='./assets/data.json';
      this.query.getData(path).subscribe(
          res=>{this.profileData=res;},
          err=>{console.log(err);},
          ()=>{}
      
      )
      
  }

  ngOnInit() {
  }

}
