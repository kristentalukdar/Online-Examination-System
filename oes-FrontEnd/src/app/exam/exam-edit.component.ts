import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExamService } from './exam.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Exam } from './exam';
import { Location } from "@angular/common";
import { Subject } from '../subject/subject';
import { SubjectService } from '../subject/subject.service';

@Component({
  selector: 'app-exam-edit',
  templateUrl: './exam-edit.component.html',
  styleUrls: ['./exam-edit.component.css']
})
export class ExamEditComponent implements OnInit {
  subjects:Subject[]=[];
  pageTitle = 'Exam Edit';
  errorMessage: string;
  examForm: FormGroup;
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };

  exam: Exam = new Exam();
  editMode = false;
  constructor(private examService: ExamService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private location: Location, private subjectService:SubjectService) {
  }

  ngOnInit(): void {
    this.editMode = false;

   
    this.examForm = this.fb.group({
      subject_id: ['', [Validators.required]],
      description: ['', [Validators.maxLength(255)]],
      noofquestions: ['0']
    });

    this.getSubjects(); 


    this.route.paramMap.subscribe(
      data => {
        if (data != null) {
          const id = data.get('id');
          if (id != null) {
            this.editMode = true;
            const n: number = +id;
            this.getExam(n);
          }
        }
      });
    if (this.editMode == false) {
      this.exam.id = 0;
      this.displayExam(this.exam);
    }


  }

  private getSubjects(){
    this.subjectService.getSubjectList().subscribe({
      next: data => {
      this.subjects = data;
    },
    error: err=>this.errorMessage=err
    });
  }

  getExam(id: number) {
    this.examService.getExam(id).subscribe(
      data => {
        this.displayExam(data);
      }
    );
  }

  displayExam(exam: Exam): void {
    if (this.examForm) {
      this.examForm.reset();
    }
    this.exam = exam;

    if (this.exam.id === 0) {
      this.pageTitle = 'Add Exam';
    } else {
      this.pageTitle = `Edit Exam: ${this.exam.description}`;
    }

    // Update the data on the form
    this.examForm.patchValue({
      subject_id: this.exam.subject_id,
      description: this.exam.description,
      noofquestions:this.exam.noofquestions
    });
  }

  getSubjectByID(subjectID: string): Subject {
    return this.subjects.filter((s: Subject) =>
      (s.id.toString() === subjectID) 
      )[0];
  }


  saveExam() {
    if (this.examForm.valid) {
      if (this.examForm.dirty) {
        this.exam.subject_id = this.examForm.value['subject_id'];
        this.exam.subject = this.getSubjectByID(this.exam.subject_id.toString());
        this.exam.description = this.examForm.value['description'];
        this.exam.noofquestions = this.examForm.value['noofquestions'];
        this.examService.saveExam(this.exam).subscribe(data => {
          this.router.navigate(['/examlist']);
        });
      }
    }
  }

  updateExam() {
    if (this.examForm.valid) {
      if (this.examForm.dirty) {
        this.exam.subject_id = this.examForm.value['subject_id'];
        this.exam.description = this.examForm.value['description'];
        this.exam.noofquestions = this.examForm.value['noofquestions'];
        this.examService.updateExam(this.exam).subscribe(data => {
          this.router.navigate(['/examlist']);
        });
      }
    }
  }

  deleteExam() {
    if (confirm(`Do you want to delete the product: ${this.exam.description}?`)) {
      this.examService.deleteExam(this.exam.id).subscribe(data => {
        this.router.navigate(['/examlist']);
      });
    }
  }

  onSubmit() {
    if (this.editMode == false) {
      this.saveExam();
    }
    else {
      this.updateExam();
    }
  }

  onSubjectSelected(event: any){
    this.examForm.patchValue({
      subject_id: event.target.value
    });
  }

  goBackToPrevPage(): void {
    this.location.back();
  }
}

