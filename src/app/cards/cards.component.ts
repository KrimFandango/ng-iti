import { Component, OnInit } from '@angular/core';
import {QueryService } from '../query.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cardData: Array<any>;
  constructor(private c: QueryService) { 

    this.cardData=[];
    this.getCardData();
  }

  getCardData(){
    let path: string ='../assets/cards.json';
    this.c.getCData(path).subscribe(
      res=> {
        console.log(res);
        this.cardData = res;
      },
      err=> {
        console.log(err);
      },
      ()=>{}

    );
  }

  ngOnInit() {
  }

}
