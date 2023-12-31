export class Student { 
    public id:number;
    public title:string;
    public registrationno:string;
    public firstName:string;
    public middleName:string;
    public lastName:string;
    public gender:string;
    public contactNo:string;
    public emailId:string;
    
    public street1?:string;
    public street2?:string;
    public city?:string;
    public state?:string;
    public pincode?:string;
    public password?:string;
}

/*
keep backup folder
create student list component
    ng g c student/student-list --flat
make necessary import in app module
    import { SubjectListComponent } from './subject/subject-list.component';
    add the component to decalartions array
create necessary routing path
    add to RouterModule.forRoot([
create student service
create student list menu item in app component
load the student list

*/



