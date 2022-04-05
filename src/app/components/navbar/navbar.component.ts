import { Component  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  userLogged: boolean=false;
  user: string='';

  constructor() { }
  logedOn($event:string){
    this.userLogged= true
    this.user=$event
  }
  logedOff(){
    this.userLogged= false
  }

  ngOnInit(): void {
  }

}
