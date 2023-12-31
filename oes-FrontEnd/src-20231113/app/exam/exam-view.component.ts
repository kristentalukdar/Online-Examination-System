import { Component, OnInit } from '@angular/core';
import { ExamService } from './exam.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Exam } from './exam';

@Component({
  selector: 'app-exam-view',
  templateUrl: './exam-view.component.html',
  styleUrls: ['./exam-view.component.css']
})
export class ExamViewComponent implements OnInit{
  pageTitle = 'Exam View';
  exam:Exam=new Exam();

  constructor(private examService:ExamService, private router:Router, private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      data=>{
        if(data!=null){
          const id= data.get('id');
          if(id!=null){
            const n:number=+id;
            this.getExam(n);
          }
        }
      });
  }

  getExam(id:number){
    this.examService.getExam(id).subscribe(
      data=>{
        this.exam=data;
      }
    );
  }

  back(){
    this.router.navigate(['/examlist']);
  }

}