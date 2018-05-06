import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GetDataService {

  constructor(private http:HttpClient) { }
  getDataFunc(path:string):Observable<any>{
    return this.http.get(path);
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> de532c3ada4236562bffce4a3036143951ae4946
