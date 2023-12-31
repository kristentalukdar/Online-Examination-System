import { Component, OnInit } from '@angular/core';
import { Teacher } from './teacher';
import { TeacherService } from './teacher.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.css']
})
export class TeacherViewComponent implements OnInit{
  pageTitle = 'Teacher View';
  t:Teacher=new Teacher();

  constructor(private teacherService:TeacherService, private router:Router, private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      data=>{
        if(data!=null){
          const id= data.get('id');
          if(id!=null){
            const n:number=+id;
            this.getTeacher(n);
          }
        }
      });
  }

  getTeacher(id:number){
    this.teacherService.getTeacher(id).subscribe(
      data=>{
        this.t=data;
      }
    );
  }

  back(){
    this.router.navigate(['/teacherlist']);
  }

}
