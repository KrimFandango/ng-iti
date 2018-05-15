import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AboutDataService } from '../about-data.service';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sliderCaption: object;  
  images: Array<string>;
  constructor(private _http: HttpClient, private Data: AboutDataService) { 
    this.sliderCaption = {};
    this.getAboutData();
  }

  getAboutData(){
    let path:string = './assets/home.json';
    this.Data.getData(path).subscribe(
      res => this.sliderCaption = res,
      err => console.log(err)
    );
  }
  
  ngOnInit() {
    this._http.get('https://picsum.photos/list')
    .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
    .subscribe(images => this.images = images);
  }
  private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
  }

  // showNav(event){
  //   let navId = document.querySelector(".nav_list");
  //   let btn = document.querySelector(".nav_btn")
  //   // navId.style.display = "flex";
  //   btn.addEventListener("click", function(){
  //     navId.classList.toggle("show");
  //   })
  // }

}
