import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class  HeaderComponent implements OnInit{
  userName?:String='';
  userType: String = '';
  userLoggedIn:Number=0;
  userIsAdmin:number=0;
  userIsTeacher:number=0;
  userIsStudent:number=0;

  constructor(private authService: AuthenticationService, private router:Router){
  }
  
  ngOnInit() {
    this.authService.userType.subscribe(value => {
      this.userType = value;
      this.userIsAdmin=0;
      this.userIsTeacher=0;
      this.userIsStudent=0;
      this.userLoggedIn=1;

      console.log("HOME CPOMPONENT=" + this.userType);

      if (this.userType==='admin') {
        this.userIsAdmin=1;
      }
      else if (this.userType==='teacher') {
        this.userIsTeacher=1;
      }
      else if (this.userType==='student') {
        this.userIsStudent=1;
      }
      else {
        this.userLoggedIn=0;
      }
      //this.userName=localStorage.getItem("username")?.toString();
      this.userName= this.userType.toUpperCase() + "-" + this.authService.user.userName;
    });
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
