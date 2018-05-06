import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../get-data.service';



@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  es: string;
  team:object;
  constructor(private Data:GetDataService) { 
    this.team = {};
    this.teamfunction();
    this.es="ANa hena";
  }

  teamfunction(){
    let path: string = 'assets/Data/aboutus_data.json';
    this.Data.getDataFunc(path).subscribe(
      res => this.team = res,
      err => console.log(err)
    );
  }

  ngOnInit() {
  }
  

}
