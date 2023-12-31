import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamComponent } from './exam/exam.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DummyComponent } from './dummy/dummy.component';
import { ResultComponent } from './result/result.component';
import { AboutComponent } from './about/about.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { SubjectEditComponent } from './subject/subject-edit.component';
import { SubjectViewComponent } from './subject/subject-view.component';
import { StudentListComponent } from './student/student-list.component';
import { StudentViewComponent } from './student/student-view.component';
import { TeacherListComponent } from './teacher/teacher-list.component';
import { TeacherViewComponent } from './teacher/teacher-view.component';
import { StudentEditComponent } from './student/student-edit.component';
import { TeacherEditComponent } from './teacher/teacher-edit.component';
import { LoginComponent } from './login/login.component';
import { QuestionListComponent } from './question/question-list.component';
import { QuestionEditComponent } from './question/question-edit.component';
import { QuestionViewComponent } from './question/question-view.component';
import { HeaderComponent } from './home/header.component';
import { FooterComponent } from './home/footer.component';
import { ExamListComponent } from './exam/exam-list.component';
import { ExamEditComponent } from './exam/exam-edit.component';
import { ExamViewComponent } from './exam/exam-view.component';
import { ForgotPassordComponent } from './login/forgot-passord.component';
import { ExamWriteComponent } from './exam/exam-write.component';
//npm install ngx-pagination

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    SubjectComponent,
    SubjectListComponent,
    QuestionComponent,
    ExamComponent,
    HomeComponent,
    AboutComponent,
    DummyComponent,
    ResultComponent,
    SubjectListComponent,
    SubjectEditComponent,
    SubjectViewComponent,
    StudentListComponent,
    StudentViewComponent,
    TeacherListComponent,
    TeacherViewComponent,
    StudentEditComponent,
    TeacherEditComponent,
    LoginComponent,
    QuestionListComponent,
    QuestionEditComponent,
    QuestionViewComponent,
    HeaderComponent,
    FooterComponent,
    ExamListComponent,
    ExamEditComponent,
    ExamViewComponent,
    ForgotPassordComponent,
    ExamWriteComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path:'student', component:StudentComponent },
      { path:'studentedit', component:StudentEditComponent },
      { path:'studentedit/:id', component:StudentEditComponent },
      { path:'studentview/:id', component:StudentViewComponent },
      { path:'studentlist', component:StudentListComponent },

      { path:'teacher', component:TeacherComponent },
      { path:'teacheredit', component:TeacherEditComponent },
      { path:'teacheredit/:id', component:TeacherEditComponent },
      { path:'teacherview/:id', component:TeacherViewComponent },
      { path:'teacherlist', component:TeacherListComponent },

      { path:'subject', component:SubjectComponent },
      { path:'subjectedit', component:SubjectEditComponent },
      { path:'subjectedit/:id', component:SubjectEditComponent },
      { path:'subjectview/:id', component:SubjectViewComponent },
      { path:'subjectlist', component:SubjectListComponent },


      { path:'question', component:QuestionComponent },
      { path:'questionedit', component:QuestionEditComponent },
      { path:'questionedit/:id', component:QuestionEditComponent },
      { path:'questionview/:id', component:QuestionViewComponent },
      { path:'questionlist', component:QuestionListComponent },


      { path:'exam', component:ExamComponent },
      { path:'exam/:id', component:ExamComponent },
      { path:'examedit', component:ExamEditComponent },
      { path:'examedit/:id', component:ExamEditComponent },
      { path:'examview/:id', component:ExamViewComponent },
      { path:'examlist', component:ExamListComponent },
      { path:'examwrite', component:ExamWriteComponent },


      { path:'home', component:HomeComponent },
      { path:'about', component:AboutComponent },
      { path:'dummy', component:DummyComponent },
      { path:'result', component:ResultComponent },
      { path:'login', component:LoginComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
