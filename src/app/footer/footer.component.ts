import { Component, OnInit } from '@angular/core';
import{ GetDataService } from '../get-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
