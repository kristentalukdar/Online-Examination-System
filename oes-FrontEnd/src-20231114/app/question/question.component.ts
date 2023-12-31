import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { Question } from './question';
import { SubjectService } from '../subject/subject.service';
import { Subject } from '../subject/subject';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questionForm:FormGroup;
  question:Question=new Question();
  subjects:Subject[]=[];
  errorMessage = '';
  selectedSubject:any;

  constructor(private fb:FormBuilder, private subjectService:SubjectService){ }
  
  ngOnInit(): void {
    console.log('This is OnIt event');
    this.questionForm=this.fb.group({
      question:['', [Validators.required, Validators.maxLength(255)]],
      choice1:['',  [Validators.required, Validators.maxLength(255)]],
      choice2:['',  [Validators.required, Validators.maxLength(255)]],
      choice3:['',  [Validators.required, Validators.maxLength(255)]],
      choice4:['',  [Validators.required, Validators.maxLength(255)]],
      choice1correct:[false],
      choice2correct:[false],
      choice3correct:[false],
      choice4correct:[false]
    });

    this.questionForm.patchValue({
      question: this.question.question,
      choice1: this.question.choice1,
      choice2: this.question.choice2,
      choice3: this.question.choice3,
      choice4: this.question.choice4,
      choice1Correct: this.question.choice1correct,
      choice2Correct: this.question.choice2correct,
      choice3Correct: this.question.choice3correct,
      choice4Correct: this.question.choice4correct
    });

    this.getSubjects(); 
  }

  private getSubjects(){
    this.subjectService.getSubjectList().subscribe({
      next: data => {
      this.subjects = data;
    },
    error: err=>this.errorMessage=err
    });
  }

  onSubjectSelected(event: any){
    this.selectedSubject = event.target.value;
    console.log(this.selectedSubject);
  }
  
  deleteQuestion(){
    
  }
}
