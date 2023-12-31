import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../login/user';
import { HttpClient } from '@angular/common/http';


// let users = [new user('admin', '123'), new user('user', '123')];


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userType: BehaviorSubject<string> = new BehaviorSubject<string>(this.getUserType());
  loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>(this.getLoggedInUser());
  user:User;
  constructor(private _router: Router, private httpClient: HttpClient) { }

  getUserType() {
    const utype = localStorage.getItem('usertype');
    return utype!=null ? utype : "DUMMY"
  }

  getLoggedInUser() {
    return this.user;
  }


  get isLoggedIn() {
    return true;
  }

  isSuperAdmin() {
    if (localStorage.getItem('user') === "admin") {
      return true;
    } else {
      return false;
    }
  }

  login(username:string, password:string, usertype:string) {
    const baseURL = "http://localhost:9090/api/v1/vaidateuser/" + usertype + "/" + username + "/" + password;
    console.log(baseURL);
  
    this.httpClient.get<User>(`${baseURL}`)
    .subscribe(data=>{
      console.log(data);
        this.user=data;
        return this.user;
    });
    return null;
  }


  // login(username:string, password:string, usertype:string) {
  //   const baseURL = "http://localhost:9090/api/v1/vaidateuser/" + usertype + "/" + username + "/" + password;
  //   console.log(baseURL);
  //   let loginStatus=false;
  //   this.httpClient.get<User>(`${baseURL}`).subscribe(
  //     data=>{
  //       this.user=data;
  //       if (this.user==null)
  //       {
  //         console.log("NO USER FOUND");
  //       }
  //       else{
  //         localStorage.setItem("username", this.user.userName);
  //         localStorage.setItem("usertype", this.user.userType);
  //         this.userType.next(usertype);
  //         console.log("USER FOUND");
  //       }
  //     }
  //   );
  // }

  logout() {
    localStorage.clear();
    this.userType.next("DUMMY");
    console.log("LOGOUT");
  }



}
