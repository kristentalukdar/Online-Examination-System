import { Router,ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { Exam } from './exam';
import { ExamQuestion, Question } from '../question/question';
import { ExamService } from './exam.service';
import { QuestionService } from '../question/question.service';
import { SubjectService } from '../subject/subject.service';
import { Subject } from '../subject/subject';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  currentQuestion:number=0;
  totalQuestion:number=0;
  totalCorrectAnswers:number=0;
  totalIncorrectAnswers:number=0;
  showResult:number=0;
  pageTitle = 'Examination';
  errorMessage:'';
  subjectID:number;
  qList:Question[]=[];
  filteredQList:Question[]=[];
  questions:ExamQuestion[]=[];
  filteredQuestions:ExamQuestion[]=[];
  subject:Subject;

  constructor(private examService:ExamService, private router:Router, private route: ActivatedRoute, private questionService:QuestionService, private subjectService:SubjectService){ }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      data => {
        if (data != null) {
          const id = data.get('id');
          if (id != null) {
            this.subjectID = +id;
            console.log("SubjectID=" + this,this.subjectID);
            this.subjectService.getSubject(this.subjectID).subscribe({
              next: data => {
                this.subject = data;
                this.pageTitle = "Attempt Exam. Subject-" + this.subject.name;
              },    
              error: err=>this.errorMessage=err
              });
        
            this.getAllQuestions(this.subjectID); 
          }
        }
      });
    
      
    
    
  }

  private getAllQuestions(subjectID:number){
    console.log("SubjectID=" + subjectID)
    this.questionService.getQuestionList().subscribe({
      next: data => {
      this.qList = data;
      this.qList.forEach((q)=>{
        console.log(q.subject.id);
      });

      this.filteredQList = this.qList.filter((q: Question) =>
        (q.subject.id===subjectID) 
      );

      this.filteredQList.forEach((q)=>{
        let eq:ExamQuestion = new ExamQuestion();
        eq.id=q.id;
        
        eq.question=q.question;
        
        eq.choice1=q.choice1;
        eq.choice2=q.choice2;
        eq.choice3=q.choice3;
        eq.choice4=q.choice4;

        eq.choice1correct=q.choice1correct;
        eq.choice2correct=q.choice2correct;
        eq.choice3correct=q.choice3correct;
        eq.choice4correct=q.choice4correct;
        eq.selectedChoice=-1;
        
        if (eq.choice1correct){
          eq.correctChoice=1;
        }
        else if (eq.choice2correct){
          eq.correctChoice=2;
        }
        else if (eq.choice3correct){
          eq.correctChoice=3;
        }
        else if (eq.choice4correct){
          eq.correctChoice=4;
        }
        else {
          eq.correctChoice=-1;
        }
        this.questions.push(eq);
      });
      this.totalQuestion=this.questions.length;
    },
    error: err=>this.errorMessage=err
    });
  }

  // private getQuestions(subjectID:number){
  //   this.examService.getQuestionList(subjectID).subscribe({
  //     next: data => {
  //     this.qList = data;

  //     this.qList.forEach((q)=>{
  //       let eq:ExamQuestion = new ExamQuestion();
  //       eq.id=q.id;
        
  //       eq.question=q.question;
        
  //       eq.choice1=q.choice1;
  //       eq.choice2=q.choice2;
  //       eq.choice3=q.choice3;
  //       eq.choice4=q.choice4;

  //       eq.choice1correct=q.choice1correct;
  //       eq.choice2correct=q.choice2correct;
  //       eq.choice3correct=q.choice3correct;
  //       eq.choice4correct=q.choice4correct;
  //       eq.selectedChoice=-1;
        
  //       if (eq.choice1correct){
  //         eq.correctChoice=1;
  //       }
  //       else if (eq.choice2correct){
  //         eq.correctChoice=2;
  //       }
  //       else if (eq.choice3correct){
  //         eq.correctChoice=3;
  //       }
  //       else if (eq.choice4correct){
  //         eq.correctChoice=4;
  //       }
  //       else {
  //         eq.correctChoice=-1;
  //       }
  //       console.log('CorrectChoice:' + eq.correctChoice)
  //       this.questions.push(eq);
  //     });
  //     this.totalQuestion=this.questions.length;
  //   },
  //   error: err=>this.errorMessage=err
  //   });
  // }

  onSubmit(){
    this.showResult=1;
    const result = this.questions.filter((obj) => {
      return (obj.correctAnswer === 1);
    });
    this.totalCorrectAnswers=result.length;
    console.log('Total Correct Answers:' + this.totalCorrectAnswers);
    this.totalIncorrectAnswers=this.totalQuestion-this.totalCorrectAnswers;
  }


  answer(selectedChoice: number){
    console.log('You Selected:' + selectedChoice)
    console.log('Correct Choice Is:' + this.questions[this.currentQuestion].correctChoice)
     
    this.questions[this.currentQuestion].selectedChoice=selectedChoice;
    if (this.questions[this.currentQuestion].selectedChoice===this.questions[this.currentQuestion].correctChoice){
      this.questions[this.currentQuestion].correctAnswer=1;
      console.log('Correct Choice')
    }
  }
  
  nextQuestion() {
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }

  startCounter() {
    //
  }

  stopCounter() {
    // this.interval$.unsubscribe();
    // this.counter = 0;
  }

  resetCounter() {
    this.stopCounter();
    // this.counter = 60;
    this.startCounter();
  }
  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions(this.subjectID);
    // this.points = 0;
    // this.counter = 60;
    this.currentQuestion = 0;
    // this.progress = "0";

  }
  getProgressPercent() {
    // this.progress = ((this.currentQuestion / this.questions.length) * 100).toString();
    // return this.progress;

  }


}
