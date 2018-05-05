import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';


const data :string="./assets/dataAboutUs.json"

@Injectable()
export class ServiceDataService {

  constructor(
    private http :HttpClient
  
  ) { }

  httpgetData(): Observable <any>{
    return this.http.get(data);
  }

}
