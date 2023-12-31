import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private baseURL = "http://localhost:9090/api/v1/question";
  


  constructor(private httpClient: HttpClient) { }

  getQuestionList(): Observable<Question[]>{
    return this.httpClient.get<Question[]>(`${this.baseURL}`);
  }

  saveQuestion(s:Question): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, s);
  }

  updateQuestion(s:Question): Observable<object>{
    return this.httpClient.put(`${this.baseURL}`, s);
  }

  deleteQuestion(id:number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getQuestion(id:number): Observable<Question>{
    return this.httpClient.get<Question>(`${this.baseURL}/${id}`);
  }
}
