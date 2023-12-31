import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { Subject } from './subject';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subjectForm:FormGroup;

  constructor(private fb:FormBuilder){ }
  
  ngOnInit(): void {
    console.log('This is OnIt event');
    this.subjectForm=this.fb.group({
      subjectId:['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)] ],
      subjectName:['', [Validators.required]],
      description:''
    });
  }

}
