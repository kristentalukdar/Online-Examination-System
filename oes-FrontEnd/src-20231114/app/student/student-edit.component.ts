import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from "@angular/common";
import { Student } from './student';
import { StudentService } from './student.service';
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
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  titles=[]=["", "Mr", "Mrs", "Miss", "Ms"];
  studentForm:FormGroup;
  errorMessage:string;
  stu: Student = new Student();
  editMode = false;
  pageTitle = 'Edit Student';
  
  // private passwordValidationMessages = {
  //   required: "Please enter password.",
  //   minlength: "Password should of minimum 6 characters."
  // };
  // emailMessage: string;

  constructor(private fb:FormBuilder, private studentService:StudentService, private router: Router, private route: ActivatedRoute, private location: Location){ }
  
  ngOnInit(): void {
    this.editMode = false;
    console.log("ngOnInit-001");
    this.studentForm=this.fb.group({ //virtual form
      title:['Mr', [Validators.required]],
      registrationNo:['REG-abc', [Validators.required, Validators.minLength(2), Validators.maxLength(10)] ],
      firstName:['', [Validators.required]],
      lastName:[''],
      gender:[''],
      contactNo:[''],
      emailId:['',[Validators.required, Validators.email]],
      middleName:[''],
      street1:[''],
      street2:[''],
      city:[''],
      state:[''],
      pincode:[''],
      passwordGroup: this.fb.group({
        password:['', [Validators.required, Validators.minLength(4)]],
        confPassword:['', [Validators.required]],
      }, { validators: [passwordMatcher]})
    });
    console.log("ngOnInit-002");

    this.route.paramMap.subscribe(
      data => {
        if (data != null) {
          const id = data.get('id');
          if (id != null) {
            this.editMode = true;
            const n: number = +id;
            this.getStudent(n);
          }
        }
      }
    );
    console.log("ngOnInit-003");

    if (this.editMode == false) {
      this.stu.id = 0;
      this.displayStudent(this.stu);
    }
    console.log("ngOnInit-004");
  }

  getStudent(id: number) {
    this.studentService.getStudent(id).subscribe(
      data => {
        this.displayStudent(data);
      }
    );
  }

  displayStudent(student: Student): void {
    console.log("displayStudent-001");

    if (this.studentForm) {
      this.studentForm.reset();
    }

    console.log("displayStudent-002");
    this.stu = student;

    console.log("displayStudent-003");
    if (this.stu.id === 0) {
      this.pageTitle = 'Add Student';
    } else {
      this.pageTitle = `Edit Student: ${this.stu.firstName}`;
    }

    console.log("displayStudent-004");
    // Update the data on the form
    this.studentForm.patchValue({
      registrationNo: this.stu.registrationno,
      title: this.stu.title,
      firstName: this.stu.firstName,
      middleName: this.stu.middleName,
      lastName: this.stu.lastName,
      gender: this.stu.gender,
      contactNo: this.stu.contactNo,
      emailId: this.stu.emailId,
      street1: this.stu.street1,
      street2: this.stu.street2,
      city: this.stu.city,
      state: this.stu.state,
      pincode: this.stu.pincode,
      passwordGroup: {password: this.stu.password}
    });
    console.log("displayStudent-005");
  }

  saveStudent() {
    console.log("saveStudent-001");
    if (this.studentForm.valid) {
      console.log("saveStudent-002");
      if (this.studentForm.dirty) {
        console.log("saveStudent-003");
        this.stu.registrationno = this.studentForm.value['registrationNo'];
        this.stu.title = this.studentForm.value['title'];
        this.stu.firstName=this.studentForm.value['firstName'];
        this.stu.middleName=this.studentForm.value['middleName'];
        this.stu.lastName=this.studentForm.value['lastName'];
        this.stu.gender=this.studentForm.value['gender'];
        this.stu.contactNo=this.studentForm.value['contactNo'];
        this.stu.emailId=this.studentForm.value['emailId'];
        this.stu.street1=this.studentForm.value['street1'];
        this.stu.street2=this.studentForm.value['street2'];
        this.stu.city=this.studentForm.value['city'];
        this.stu.state=this.studentForm.value['state'];
        this.stu.pincode=this.studentForm.value['pincode'];
        this.stu.password=this.studentForm.get(['passwordGroup', 'password'])?.value;
        console.log("saveStudent-003-01. " + this.stu.password);
        console.log("saveStudent-004");
        this.studentService.saveStudent(this.stu).subscribe(data => {
          this.router.navigate(['/studentlist']);
        });
      }
    }
  }

  updateStudent() {
    if (this.studentForm.valid) {
      if (this.studentForm.dirty) {
        this.stu.registrationno = this.studentForm.value['registrationNo'];
        this.stu.title = this.studentForm.value['title'];
        this.stu.firstName=this.studentForm.value['firstName'];
        this.stu.middleName=this.studentForm.value['middleName'];
        this.stu.lastName=this.studentForm.value['lastName'];
        this.stu.gender=this.studentForm.value['gender'];
        this.stu.contactNo=this.studentForm.value['contactNo'];
        this.stu.emailId=this.studentForm.value['emailId'];
        this.stu.street1=this.studentForm.value['street1'];
        this.stu.street2=this.studentForm.value['street2'];
        this.stu.city=this.studentForm.value['city'];
        this.stu.state=this.studentForm.value['state'];
        this.stu.pincode=this.studentForm.value['pincode'];
        this.stu.password=this.studentForm.get(['passwordGroup', 'password'])?.value;
        this.studentService.updateStudent(this.stu).subscribe(data => {
          this.router.navigate(['/studentlist']);
        });
      }
    }
  }

  onSubmit(){
    if (this.editMode == false) {
      this.saveStudent();
    }
    else {
      this.updateStudent();
    }  
  }

  goBackToPrevPage(): void {
    this.location.back();
  }
  
  onTitleSelected(event:any){
    this.studentForm.patchValue({
      title: event.target.value
    });
  }

  
  // setMessage(c: AbstractControl): void {
  //   this.emailMessage = '';
  //   if ((c.touched || c.dirty) && c.errors) {
  //     this.emailMessage = Object.keys(c.errors).map(
  //       key => this.passwordValidationMessages[key]).join(' ');
  //   }
  // }


}
