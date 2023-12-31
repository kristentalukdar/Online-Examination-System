import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamWriteComponent } from './exam-write.component';

describe('ExamWriteComponent', () => {
  let component: ExamWriteComponent;
  let fixture: ComponentFixture<ExamWriteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamWriteComponent]
    });
    fixture = TestBed.createComponent(ExamWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
