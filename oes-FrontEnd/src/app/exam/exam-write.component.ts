import { Component, OnInit } from '@angular/core';
import { Exam } from './exam';
import { ExamService } from './exam.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-write',
  templateUrl: './exam-write.component.html',
  styleUrls: ['./exam-write.component.css']
})
export class ExamWriteComponent  implements OnInit {

  pageTitle = 'Attemp Exam';
  exams:Exam[]=[];
  filteredExams:Exam[]=[];
  _listFilter = '';
  errorMessage = '';
  page:number=1;
  itemsPerPage:number=5;
  totalExam:number=0;

  constructor(private examService:ExamService, private router:Router){ }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredExams = this.listFilter ? this.performFilter(this.listFilter) : this.exams;
  }

  performFilter(filterBy: string): Exam[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.exams.filter((s: Exam) =>
      (s.description.toLocaleLowerCase().indexOf(filterBy) !== -1) 
      );
  }

  ngOnInit(): void {
    this.getExams();    
  }

  private getExams(){
    this.examService.getExamList().subscribe({
      next: data => {
      this.exams = data;
      this.filteredExams = this.exams;
      this.totalExam=this.filteredExams.length;
    },
    error: err=>this.errorMessage=err
    });
  }

  startExam(id:number){
    this.router.navigate(['exam', id]);
  }

  pageChange(event: any){
    this.itemsPerPage=event?.target.value;
    this.page=1;
    this.getExams();
  }

}

