import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { Result } from './result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{
  resultForm:FormGroup;

  constructor(private fb:FormBuilder){ }
  
  ngOnInit(): void {
    console.log('This is OnIt event');
    this.resultForm=this.fb.group({
      resultId:'',
      studentId:'',
      subjectName:'',
      score:'',
      grade:''
    });
  }

}
