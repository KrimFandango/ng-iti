import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QueryService {
  path:string
  constructor(
    private http : HttpClient
  ) { }

  getData(path): Observable<any> {
    return this.http.get(path)
  }
}

