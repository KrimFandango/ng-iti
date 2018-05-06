import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


import { GetDataService } from "../get-data.service";

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  team: any;
  constructor(private http: HttpClient) { 
    this.team = [];
    
  }

  ngOnInit() {
  }
  

}
