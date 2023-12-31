import { Component, OnInit } from '@angular/core';
import { Subject } from './subject';
import { SubjectService } from './subject.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.css']
})
export class SubjectEditComponent implements OnInit {

  pageTitle = 'Subject Edit';
  errorMessage: string;
  subjectForm: FormGroup;
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };

  sub: Subject = new Subject();
  editMode = false;
  constructor(private subjectService: SubjectService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.validationMessages = {
      subjectName: {
        required: 'Product name is required.',
        minlength: 'Product name must be at least three characters.',
        maxlength: 'Product name cannot exceed 50 characters.'
      }
    };
  }

  ngOnInit(): void {
    this.editMode = false;

    this.subjectForm = this.fb.group({
      subjectName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description: ['', [Validators.maxLength(255)]]
    });

    this.route.paramMap.subscribe(
      data => {
        if (data != null) {
          const id = data.get('id');
          if (id != null) {
            this.editMode = true;
            const n: number = +id;
            this.getSubject(n);
          }
        }
      });
    if (this.editMode == false) {
      this.sub.id = 0;
      this.displaySubject(this.sub);
    }
  }

  getSubject(id: number) {
    this.subjectService.getSubject(id).subscribe(
      data => {
        this.displaySubject(data);
      }
    );
  }

  displaySubject(subject: Subject): void {
    if (this.subjectForm) {
      this.subjectForm.reset();
    }
    this.sub = subject;

    if (this.sub.id === 0) {
      this.pageTitle = 'Add Subject';
    } else {
      this.pageTitle = `Edit Subject: ${this.sub.name}`;
    }

    // Update the data on the form
    console.log(999);
    this.subjectForm.patchValue({
      subjectName: this.sub.name,
      description: this.sub.description
    });
    console.log(9999);
  }

  saveSubject() {
    if (this.subjectForm.valid) {
      if (this.subjectForm.dirty) {
        // const s = { ...this.sub, ...this.subjectForm.value }; //If class variable and control name are same then use this
        this.sub.name = this.subjectForm.value['subjectName'];
        this.sub.description = this.subjectForm.value['description'];
        this.subjectService.saveSubject(this.sub).subscribe(data => {
          this.router.navigate(['/subjectlist']);
        });
      }
    }
  }

  updateSubject() {
    if (this.subjectForm.valid) {
      if (this.subjectForm.dirty) {
        this.sub.name = this.subjectForm.value['subjectName'];
        this.sub.description = this.subjectForm.value['description'];
        this.subjectService.updateSubject(this.sub).subscribe(data => {
          this.router.navigate(['/subjectlist']);
        });
      }
    }
  }

  deleteSubject() {
    if (confirm(`Do you want to delete the product: ${this.sub.name}?`)) {
      this.subjectService.deleteSubject(this.sub.id).subscribe(data => {
        this.router.navigate(['/subjectlist']);
      });
    }
  }

  onSubmit() {
    console.log(this.sub);
    console.log(this.editMode);
    if (this.editMode == false) {
      this.saveSubject();
    }
    else {
      this.updateSubject();
    }
  }

}
