import { Component, OnInit } from '@angular/core';
import{ GetDataService } from '../get-data.service';
// import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  data:Array<any>;
  constructor(private seviceObj :GetDataService) {
    this.data=[];
    this.get_pic();
   }

  get_pic():void{
    let path:string="../assets/Data/pics.json";
    this.seviceObj.getDataFunc(path).subscribe(
      res=>{console.log(res);this.data=res;},
      err=>{console.log(err)},
      ()=>{}
    );
  }

  ngOnInit() {
  }

}
