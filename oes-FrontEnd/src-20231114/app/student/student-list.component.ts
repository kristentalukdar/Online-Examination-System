import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent  implements OnInit {

  pageTitle = 'Student List';
  students:Student[]=[];
  filteredStudents:Student[]=[];
  _listFilter = '';
  errorMessage = '';
  page:number=1;
  itemsPerPage:number=5;
  totalStudent:number=0;

  constructor(private studentService:StudentService, private router:Router){ }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredStudents = this.listFilter ? this.performFilter(this.listFilter) : this.students;
  }

  performFilter(filterBy: string): Student[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.students.filter((s: Student) =>
      (s.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1) 
      || 
      (s.middleName.toLocaleLowerCase().indexOf(filterBy) !== -1)
      || 
      (s.lastName.toLocaleLowerCase().indexOf(filterBy) !== -1)
      );
  }

  ngOnInit(): void {
    this.getStudents();    
    console.log(localStorage.getItem('USERNAME'));
    console.log(localStorage.getItem('USERTYPE'));
  }

  private getStudents(){
    this.studentService.getStudentList().subscribe({
      next: data => {
      this.students = data;
      this.filteredStudents = this.students;
      this.totalStudent=this.filteredStudents.length;
    },
    error: err=>this.errorMessage=err
    });
  }

  addStudent(){
    this.router.navigate(['studentedit']);
  }
  
  updateStudent(id:number){
    this.router.navigate(['studentedit', id]);
  }

  deleteStudent(id:number){
    if (confirm(`Really delete the Student Id: ${id}?`)) {
      this.studentService.deleteStudent(id).subscribe(data => {
        this.getStudents();
      });
    }  
  }

  studentDetails(id:number){
    this.router.navigate(['studentview', id]);
  }

  pageChange(event: any){
    this.itemsPerPage=event?.target.value;
    this.page=1;
    this.getStudents();
  }

}
