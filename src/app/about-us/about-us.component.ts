import { Component, OnInit } from '@angular/core';
import { AboutDataService } from '../about-data.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  aboutUsData: object;
  constructor(
    private Data: AboutDataService
  ) { 
    this.aboutUsData = {};
    this.getAboutData();
  }

  getAboutData(){
    let path:string = './assets/aboutUs.json';
    this.Data.getData(path).subscribe(
      res => this.aboutUsData = res,
      err => console.log(err)
    );
  }

  ngOnInit() {
  }

}
