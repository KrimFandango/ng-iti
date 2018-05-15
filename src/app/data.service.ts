import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DataService {

  constructor(private req: HttpClient) { }

  
  getData(path: string): Observable<any> {
    return this.req.get(path);
  }
}
