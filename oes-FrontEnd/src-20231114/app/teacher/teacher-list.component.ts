import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from './teacher.service';
import { Teacher } from './teacher';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent  implements OnInit {

  pageTitle = 'Teacher List';
  teachers:Teacher[]=[];
  filteredTeachers:Teacher[]=[];
  _listFilter = '';
  errorMessage = '';
  page:number=1;
  itemsPerPage:number=5;
  totalTeacher:number=0;

  constructor(private teacherService:TeacherService, private router:Router){ }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredTeachers = this.listFilter ? this.performFilter(this.listFilter) : this.teachers;
  }

  performFilter(filterBy: string): Teacher[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.teachers.filter((t: Teacher) =>
      (t.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1) 
      || 
      (t.middleName.toLocaleLowerCase().indexOf(filterBy) !== -1)
      || 
      (t.lastName.toLocaleLowerCase().indexOf(filterBy) !== -1)
      );
  }

  ngOnInit(): void {
    this.getTeachers();    
  }

  private getTeachers(){
    this.teacherService.getTeacherList().subscribe({
      next: data => {
      this.teachers = data;
      this.filteredTeachers = this.teachers;
      this.totalTeacher=this.filteredTeachers.length;
      console.log(this.teachers[0].registrationno);
    },
    error: err=>this.errorMessage=err
    });
  }

  addTeacher(){
    this.router.navigate(['teacheredit']);
  }
  
  updateTeacher(id:number){
    this.router.navigate(['teacheredit', id]);
  }

  deleteTeacher(id:number){
    if (confirm(`Really delete the teacher Id: ${id}?`)) {
      this.teacherService.deleteTeacher(id).subscribe(data => {
        this.getTeachers();
      });
    }  
  }

  teacherDetails(id:number){
    this.router.navigate(['teacherview', id]);
  }

  pageChange(event: any){
    this.itemsPerPage=event?.target.value;
    this.page=1;
    this.getTeachers();
  }

}
