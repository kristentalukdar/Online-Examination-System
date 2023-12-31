import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit{
    pageTitle = 'Student View';
    s:Student=new Student();
  
    constructor(private studentService:StudentService, 
              private router:Router, 
              private route:ActivatedRoute){ }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe(
        data=>{
          if(data!=null){
            const id= data.get('id');
            if(id!=null){
              const n:number=+id;
              this.getStudent(n);
            }
          }
        });
    }
  
    getStudent(id:number){
      this.studentService.getStudent(id).subscribe(
        data=>{
          this.s=data;
        }
      );
    }
  
    back(){
      this.router.navigate(['/studentlist']);
    }
  
  }
  