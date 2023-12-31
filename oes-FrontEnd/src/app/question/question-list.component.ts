import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from './question';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})

export class QuestionListComponent  implements OnInit {

  pageTitle = 'Question List';
  questions:Question[]=[];
  filteredQuestions:Question[]=[];
  _listFilter = '';
  errorMessage = '';
  page:number=1;
  itemsPerPage:number=5;
  totalQuestion:number=0;

  constructor(private questionService:QuestionService, private router:Router){ }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredQuestions = this.listFilter ? this.performFilter(this.listFilter) : this.questions;
  }

  performFilter(filterBy: string): Question[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.questions.filter((s: Question) =>
      (s.question.toLocaleLowerCase().indexOf(filterBy) !== -1) 
      || 
      (s.choice1.toLocaleLowerCase().indexOf(filterBy) !== -1)
      || 
      (s.choice1.toLocaleLowerCase().indexOf(filterBy) !== -1)
      );
  }

  ngOnInit(): void {
    this.getQuestions();    
  }

  private getQuestions(){
    this.questionService.getQuestionList().subscribe({
      next: data => {
      this.questions = data;
      this.filteredQuestions = this.questions;
      this.totalQuestion=this.filteredQuestions.length;
    },
    error: err=>this.errorMessage=err
    });
  }

  addQuestion(){
    this.router.navigate(['questionedit']);
  }
  
  updateQuestion(id:number){
    this.router.navigate(['questionedit', id]);
  }

  deleteQuestion(id:number){
    if (confirm(`Really delete the Question Id: ${id}?`)) {
      this.questionService.deleteQuestion(id).subscribe(data => {
        this.getQuestions();
      });
    }  
  }

  questionDetails(id:number){
    this.router.navigate(['questionview', id]);
  }

  pageChange(event: any){
    this.itemsPerPage=event?.target.value;
    this.page=1;
    this.getQuestions();
  }

}
