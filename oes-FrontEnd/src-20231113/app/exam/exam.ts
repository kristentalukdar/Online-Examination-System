import { Subject } from "../subject/subject";

export class Exam { 
    public id:number=0;
    public subject_id:number=0;
    public description:string=''
    public noofquestions:number=0;
    public subject:Subject;
}