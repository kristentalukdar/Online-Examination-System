import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Question } from '../question/question';
import { Exam } from './exam';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private baseURL = "http://localhost:9090/api/v1/exam";
  private baseURLQList ='http://localhost:9090/api/v1/questionbysubjectid';

  constructor(private httpClient: HttpClient) { }

  getQuestionList(subjectID:number): Observable<Question[]>{
    return this.httpClient.get<Question[]>(`${this.baseURLQList}/${subjectID}`);
  }

  getExamList(): Observable<Exam[]>{
    return this.httpClient.get<Exam[]>(`${this.baseURL}`);
  }

  saveExam(s:Exam): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, s);
  }

  updateExam(s:Exam): Observable<object>{
    return this.httpClient.put(`${this.baseURL}`, s);
  }

  deleteExam(id:number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getExam(id:number): Observable<Exam>{
    return this.httpClient.get<Exam>(`${this.baseURL}/${id}`);
  }

}
