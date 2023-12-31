import { Injectable } from '@angular/core';
import { Subject } from './subject';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private baseURL = "http://localhost:9090/api/v1/subject";

  constructor(private httpClient: HttpClient) { }

  getSubjectList(): Observable<Subject[]>{
    return this.httpClient.get<Subject[]>(`${this.baseURL}`);
  }

  saveSubject(s:Subject): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, s);
  }

  updateSubject(s:Subject): Observable<object>{
    console.log("update method calling");
    return this.httpClient.put(`${this.baseURL}`, s);
  }

  deleteSubject(id:number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getSubject(id:number): Observable<Subject>{
    return this.httpClient.get<Subject>(`${this.baseURL}/${id}`);
  }
}
