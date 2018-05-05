import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarCollapsed: boolean;
  constructor(
    private router:Router,
    private currentRoute : ActivatedRoute
  ){
    this.navbarCollapsed = true;
  }

  goLogin():void{
    this.router.navigate(['/login'],{queryParams:{name:'marina',age:24}});
  }

  goRegister():void{
    this.router.navigate(['/signUp'],{queryParams:{name:'marina',age:24}});
  }

}
