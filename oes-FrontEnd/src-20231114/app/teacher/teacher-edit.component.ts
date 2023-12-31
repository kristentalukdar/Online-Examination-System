import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from "@angular/common";
import { Teacher } from './teacher';
import { TeacherService } from './teacher.service';
import { ActivatedRoute, Router } from '@angular/router';

function passwordMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  console.log("passwordMatcher-001");
  const password = c.get('password');
  const confPassword = c.get('confPassword');
  console.log("passwordMatcher-002. Pwd=" + password + ",  CPwd=" + confPassword);
  if (password?.pristine || confPassword?.pristine) {
    console.log("passwordMatcher-003");
    return null;
  }
  if (password?.value === confPassword?.value) {
    console.log("passwordMatcher-004. Pwd=" + password?.value + ",  CPwd=" + confPassword?.value);
    return null;
  }
  console.log("passwordMatcher-005");
  return { PasswordNoMatch: true };
}


@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit{
  titles=[]=["", "Mr", "Mrs", "Miss", "Ms"];
  teacherForm:FormGroup;
  editMode = false;
  tech: Teacher=new Teacher();
  pageTitle = 'Edit Teacher';

  constructor(private fb:FormBuilder, private teacherService:TeacherService, private router: Router, private route: ActivatedRoute, private location: Location){ }
  
  ngOnInit(): void {
    console.log('This is OnIt event');
    this.teacherForm=this.fb.group({
      title:['', [Validators.required]],
      registrationno:['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      firstName:['', [Validators.required]],
      lastName:[''],
      gender:'',
      contactNo:[''],
      emailId:[''],
      middleName:'',
      street1:'',
      street2:'',
      city:'',
      state:'',
      pincode:'',
      passwordGroup: this.fb.group({
        password:['', [Validators.required, Validators.minLength(4)]],
        confPassword:['', [Validators.required]],
      }, { validators: [passwordMatcher]})
    });

    this.route.paramMap.subscribe(
      data => {
        if (data != null) {
          const id = data.get('id');
          if (id != null) {
            this.editMode = true;
            const n: number = +id;
            this.getTeacher(n);
          }
        }
      });
    if (this.editMode == false) {
      this.tech.id = 0;
      this.displayTeacher(this.tech);
    }
  }

  getTeacher(id: number){
    this.teacherService.getTeacher(id).subscribe(
      data => {
        this.displayTeacher(data);
      }
    );

  }

  displayTeacher(teacher: Teacher): void{
    if (this.teacherForm) {
      this.teacherForm.reset();
    }
    this.tech = teacher;

    if (this.tech.id === 0) {
      this.pageTitle = 'Add Student';
    } else {
      this.pageTitle = `Edit Student: ${this.tech.firstName}`;
    }

    // Update the data on the form
    this.teacherForm.patchValue({
      registrationno: this.tech.registrationno,
      title: this.tech.title,
      firstName: this.tech.firstName,
      middleName: this.tech.middleName,
      lastName: this.tech.lastName,
      gender: this.tech.gender,
      contactNo: this.tech.contactNo,
      emailId: this.tech.emailId,
      street1: this.tech.street1,
      street2: this.tech.street2,
      city: this.tech.city,
      state: this.tech.state,
      pincode: this.tech.pincode,
      passwordGroup: {password: this.tech.password, confPassword: this.tech.password}
    });
    
  }

  updateTeacher(){
    if (this.teacherForm.valid) {
      if (this.teacherForm.dirty) {
        this.tech.registrationno = this.teacherForm.value['registrationno'];
        this.tech.title = this.teacherForm.value['title'];
        this.tech.firstName=this.teacherForm.value['firstName'];
        this.tech.middleName=this.teacherForm.value['middleName'];
        this.tech.lastName=this.teacherForm.value['lastName'];
        this.tech.gender=this.teacherForm.value['gender'];
        this.tech.contactNo=this.teacherForm.value['contactNo'];
        this.tech.emailId=this.teacherForm.value['emailId'];
        this.tech.street1=this.teacherForm.value['street1'];
        this.tech.street2=this.teacherForm.value['street2'];
        this.tech.city=this.teacherForm.value['city'];
        this.tech.state=this.teacherForm.value['state'];
        this.tech.pincode=this.teacherForm.value['pincode'];
        this.tech.password=this.teacherForm.get(['passwordGroup','password'])?.value;
        console.log("updateTeacher-003-01. " + this.tech.password);
        this.teacherService.updateTeacher(this.tech).subscribe(data => {
          this.router.navigate(['/teacherlist']);
        });
      }
    }

  }

  saveTeacher(){
    if (this.teacherForm.valid) {
      if (this.teacherForm.dirty) {
        this.tech.registrationno = this.teacherForm.value['registrationno'];
        this.tech.title = this.teacherForm.value['title'];
        this.tech.firstName=this.teacherForm.value['firstName'];
        this.tech.middleName=this.teacherForm.value['middleName'];
        this.tech.lastName=this.teacherForm.value['lastName'];
        this.tech.gender=this.teacherForm.value['gender'];
        this.tech.contactNo=this.teacherForm.value['contactNo'];
        this.tech.emailId=this.teacherForm.value['emailId'];
        this.tech.street1=this.teacherForm.value['street1'];
        this.tech.street2=this.teacherForm.value['street2'];
        this.tech.city=this.teacherForm.value['city'];
        this.tech.state=this.teacherForm.value['state'];
        this.tech.pincode=this.teacherForm.value['pincode'];
        this.tech.password=this.teacherForm.get(['passwordGroup','password'])?.value;
        console.log("saveTeacher-003-01. " + this.tech.password);
        this.teacherService.saveTeacher(this.tech).subscribe(data => {
          this.router.navigate(['/teacherlist']);
        });
      }
    }

  }

  onSubmit(){
    if (this.editMode == false) {
      this.saveTeacher();
    }
    else {
      this.updateTeacher();
    }
  
  }

  goBackToPrevPage(): void {
    this.location.back();
  }
  
  onTitleSelected(event:any){
    this.teacherForm.patchValue({
      title: event.target.value
    });
  }
    
}
