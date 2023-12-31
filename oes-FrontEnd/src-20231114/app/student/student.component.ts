import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { Student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentForm:FormGroup;

  constructor(private fb:FormBuilder){ }
  
  ngOnInit(): void {
    console.log('This is OnIt event');
    this.studentForm=this.fb.group({
      title:['', [Validators.required]],
      registrationNo:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)] ],
      firstName:['', [Validators.required]],
      lastName:['', [Validators.required]],
      gender:'',
      contactNo:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      emailId:['', [Validators.required, Validators.email]],
      middleName:'',
      street1:'',
      street2:'',
      city:'',
      state:'',
      pincode:''
    });
  }

}
