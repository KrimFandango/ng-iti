import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QueryService {

  constructor(
    private http:HttpClient
  ) { }
  getData(path:string):Observable<any> {
    return this.http.get(path);
  }
  getAbout(path:string) : Observable<any>{
    return this.http.get(path);
  }

  getCData(path: string): Observable<any>{
    return this.http.get(path);
  }

  getContactData(path:string): Observable<any>{
    return this.http.get(path);
  }

}
