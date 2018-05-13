import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../service-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  people: object;
  constructor(
    private data : ServiceDataService
  ) { }

  ngOnInit() {
    this.data.httpgetData().subscribe(data => {
      this.people = data;
      console.log(this.people)
    })
  }

}
