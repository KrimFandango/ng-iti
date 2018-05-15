import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
 aboutData: Array<any>;
  constructor(private q:DataService) {
  this.getaboutData();
}

  ngOnInit() {
  }
  getaboutData(): void{
  	let path:string='././assets/aboutData.json';
  	this.q.getData(path).subscribe(

  		res => {
  			this.aboutData= res;
  			console.log(res)
  		},
  		err => {
  			console.log(err)
  		}
  		);
}
}