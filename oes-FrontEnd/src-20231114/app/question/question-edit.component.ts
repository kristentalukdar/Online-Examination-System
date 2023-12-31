import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { Question } from './question';
import { SubjectService } from '../subject/subject.service';
import { Subject } from '../subject/subject';
import { QuestionService } from './question.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {
  pageTitle = 'Edit Question';
  questionForm:FormGroup;
  question:Question=new Question();
  subjects:Subject[]=[];
  errorMessage = '';
  selectedSubject:Subject;
  editMode:boolean=false;

  constructor(private fb:FormBuilder, private subjectService:SubjectService, private questionService:QuestionService, private router: Router, private route: ActivatedRoute){ }
  
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
      choice1correct: this.question.choice1correct,
      choice2correct: this.question.choice2correct,
      choice3correct: this.question.choice3correct,
      choice4correct: this.question.choice4correct
    });

    this.route.paramMap.subscribe(
      data => {
        if (data != null) {
          const id = data.get('id');
          if (id != null) {
            this.editMode = true;
            const n: number = +id;
            this.getQuestion(n);
          }
        }
      });

    if (this.editMode == false) {
      this.question.id = 0;
      this.displayQuestion(this.question);
    }


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


  getQuestion(id: number) {
    this.questionService.getQuestion(id).subscribe(
      data => {
        this.displayQuestion(data);
      }
    );
  }

  displayQuestion(q: Question): void {
    if (this.questionForm) {
      this.questionForm.reset();
    }
    this.question = q;

    if (this.question.id === 0) {
      this.pageTitle = 'Add Question';
    } else {
      this.pageTitle = `Edit Question: ${this.question.id}`;
    }

    // Update the data on the form
    this.questionForm.patchValue({
      question: this.question.question,
      choice1: this.question.choice1,
      choice2: this.question.choice2,
      choice3: this.question.choice3,
      choice4: this.question.choice4,
      choice1correct: this.question.choice1correct,
      choice2correct: this.question.choice2correct,
      choice3correct: this.question.choice3correct,
      choice4correct: this.question.choice4correct
    });
  }


  onSubjectSelected(event: any){
    this.selectedSubject = this.getSubjectByID(event.target.value);
    console.log(this.selectedSubject.name);
  }
  
  deleteQuestion(){
    
  }

  getSubjectByID(subjectID: string): Subject {
    return this.subjects.filter((s: Subject) =>
      (s.id.toString() === subjectID) 
      )[0];
  }

  saveQuestion() {
    if (this.questionForm.valid) {
      console.log("OnSubmit-Save-VALID");
      if (this.questionForm.dirty) {
        console.log("OnSubmit-Save-DIRTY");
        this.question.subject = this.selectedSubject;
        this.question.question = this.questionForm.value['question'];
        this.question.choice1 = this.questionForm.value['choice1'];
        this.question.choice2 = this.questionForm.value['choice2'];
        this.question.choice3 = this.questionForm.value['choice3'];
        this.question.choice4 = this.questionForm.value['choice4'];
        this.question.choice1correct = this.questionForm.value['choice1correct'];
        this.question.choice2correct = this.questionForm.value['choice2correct'];
        this.question.choice3correct = this.questionForm.value['choice3correct'];
        this.question.choice4correct = this.questionForm.value['choice4correct'];
        console.log(this.question.choice1correct);
        this.questionService.saveQuestion(this.question).subscribe(data => {
          console.log("SAVED");
          this.router.navigate(['/questionlist']);
        });
      }
    }
  }

  updateQuestion() {
    if (this.questionForm.valid) {
      if (this.questionForm.dirty) {
        this.question.subject = this.selectedSubject;
        this.question.question = this.questionForm.value['question'];
        this.question.choice1 = this.questionForm.value['choice1'];
        this.question.choice2 = this.questionForm.value['choice2'];
        this.question.choice3 = this.questionForm.value['choice3'];
        this.question.choice4 = this.questionForm.value['choice4'];
        this.question.choice1correct = this.questionForm.value['choice1correct'];
        this.question.choice2correct = this.questionForm.value['choice2correct'];
        this.question.choice3correct = this.questionForm.value['choice3correct'];
        this.question.choice4correct = this.questionForm.value['choice4correct'];
        this.questionService.updateQuestion(this.question).subscribe(data => {
          this.router.navigate(['/questionlist']);
        });
      }
    }
  }

  onSubmit() {
    console.log("OnSubmit");
    if (this.editMode == false) {
      console.log("OnSubmit-Save");
      this.saveQuestion();
    }
    else {
      console.log("OnSubmit-Update");
      this.updateQuestion();
    }
  }
}
