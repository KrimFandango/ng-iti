import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public dataprofile:object
  constructor(
    private q : QueryService
  ) { }

  getProfileData():void{
    let path:string ='./assets/profiledata.json'
    this.q.getData(path).subscribe(
      res => { this.dataprofile = res ,
        console.log(this.dataprofile),
        console.log(res)},
      err => { console.log (err)}
    )
  }

  
  ngOnInit() {
  }

}

