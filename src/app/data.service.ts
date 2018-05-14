import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DataService {

  constructor(private req: HttpClient) { }
<<<<<<< HEAD

=======
  
>>>>>>> 1e1333d94fcb8a8c3199d47b2230a32bc3b58920
  getData(path: string): Observable<any> {
    return this.req.get(path);
  }
}
