import { Component, OnInit } from '@angular/core';
import { Subject } from './subject';
import { SubjectService } from './subject.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subject-view',
  templateUrl: './subject-view.component.html',
  styleUrls: ['./subject-view.component.css']
})
export class SubjectViewComponent implements OnInit{
  pageTitle = 'Subject View';
  sub:Subject=new Subject();

  constructor(private subjectService:SubjectService, private router:Router, private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      data=>{
        if(data!=null){
          const id= data.get('id');
          if(id!=null){
            const n:number=+id;
            this.getSubject(n);
          }
        }
      });
  }

  getSubject(id:number){
    this.subjectService.getSubject(id).subscribe(
      data=>{
        this.sub=data;
      }
    );
  }

  back(){
    this.router.navigate(['/subjectlist']);
  }

}
