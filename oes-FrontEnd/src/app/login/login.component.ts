import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm:FormGroup;
  
  constructor( private httpClient: HttpClient, private fb:FormBuilder, private authService: AuthenticationService, private router:Router){}

  ngOnInit(){
    this.loginForm=this.fb.group({
      username:[''],
      password:[''],
      usertype:['']
    });

    this.loginForm.patchValue({
      username: '',
      password: '',
      usertype: '1'
    });
  }

  onUserTypeSelected(event: any){
    this.loginForm.get("usertype")?.patchValue(event.target.value);
  }

  login(){
    const usertype=this.loginForm.value["usertype"];
    if (usertype==null||usertype==""){
      alert("Please select user type");
      return;
    }
    const username=this.loginForm.value["username"];
    const password=this.loginForm.value["password"];
    
    let userTypeName:string="";
    if (usertype==="1"){
      userTypeName="admin"
    }else if (usertype==="2"){
      userTypeName="teacher"
    }else if (usertype==="3"){
      userTypeName="student"
    }

    const baseURL = "http://localhost:9090/api/v1/vaidateuser/" + userTypeName + "/" + username + "/" + password;
    console.log(baseURL);
  
    this.httpClient.get<User>(`${baseURL}`)
    .subscribe(data=>{
      console.log(data);
      this.authService.user=data;

      //localStorage.setItem("username", this.user.userName);
      //localStorage.setItem("usertype", this.user.userType);
      this.authService.userType.next(userTypeName);
    this.router.navigate(['home']);    
    });
    // if (this.authService.login(username, password, userTypeName)){
    //   this.router.navigate(['home']);  
    // }
    // else
    // {
    //   alert("Invalid Username or Password");
    // }
  }


  forgotPassword(){
    
  }

  teacherRegister(){
    this.router.navigate(['teacheredit']);
  }

  studentRegister(){
    this.router.navigate(['studentedit']);  
  }

}
