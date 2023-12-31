import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { Teacher } from './teacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit{
  teacherForm:FormGroup;

  constructor(private fb:FormBuilder){ }
  
  ngOnInit(): void {
    console.log('This is OnIt event');
    this.teacherForm=this.fb.group({
      title:['', [Validators.required]],
      teacherId:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
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
