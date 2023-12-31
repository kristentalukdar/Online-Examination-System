import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from './subject.service';
import { Subject } from './subject';


@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  pageTitle = 'Subject List';
  subjects:Subject[]=[];
  filteredSubjects:Subject[]=[];
  _listFilter = '';
  errorMessage = '';
  page:number=1;
  itemsPerPage:number=5;
  totalSubject:number=0;

  constructor(private subjectService:SubjectService, private router:Router){ }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredSubjects = this.listFilter ? this.performFilter(this.listFilter) : this.subjects;
  }

  performFilter(filterBy: string): Subject[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.subjects.filter((sub: Subject) =>
      (sub.name.toLocaleLowerCase().indexOf(filterBy) !== -1) || (sub.description.toLocaleLowerCase().indexOf(filterBy) !== -1)
      );
  }

  ngOnInit(): void {
    this.getSubjects();    
  }

  private getSubjects(){
    this.subjectService.getSubjectList().subscribe({
      next: data => {
      this.subjects = data;
      this.filteredSubjects = this.subjects;
      this.totalSubject=this.filteredSubjects.length;
    },
    error: err=>this.errorMessage=err
    });
  }

  addSubject(){
    console.log('Add Subject');
    this.router.navigate(['subjectedit']);
  }
  
  updateSubject(id:number){
    this.router.navigate(['subjectedit', id]);
  }

  deleteSubject(id:number){
    if (confirm(`Really delete the product Id: ${id}?`)) {
      this.subjectService.deleteSubject(id).subscribe(data => {
        this.getSubjects();
      });
    }  
  }

  subjectDetails(id:number){
    this.router.navigate(['subjectview', id]);
  }

  pageChange(event: any){
    console.log(100);
    this.itemsPerPage=event?.target.value;
    this.page=1;
    this.getSubjects();
  }
  


}
