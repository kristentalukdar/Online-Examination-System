import { Subject } from "../subject/subject";

export class Question { 
    public id:number=0;
    public question:string='Q';
    public choice1:string='1';
    public choice2:string='2';
    public choice3:string='3';
    public choice4:string='4';
    public choice1correct:boolean=false;
    public choice2correct:boolean=false;
    public choice3correct:boolean=false;
    public choice4correct:boolean=false;
    public selectedChoice?:number=0;
    // public subject_id:number=0;
    public subject:Subject;
}


export class ExamQuestion { 
    public id:number=0;
    public question:string='Q';
    public choice1:string='1';
    public choice2:string='2';
    public choice3:string='3';
    public choice4:string='4';
    public choice1correct:boolean=false;
    public choice2correct:boolean=false;
    public choice3correct:boolean=false;
    public choice4correct:boolean=false;
    public selectedChoice:number=0;
    public correctChoice:number=0;
    public correctAnswer:number=0;
    // public subject_id:number=0;
    public subject:Subject;
}