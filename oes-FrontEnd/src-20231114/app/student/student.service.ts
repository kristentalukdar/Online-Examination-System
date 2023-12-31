import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = "http://localhost:9090/api/v1/student";

  constructor(private httpClient: HttpClient) { }

  getStudentList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }

  saveStudent(s:Student): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, s);
  }

  updateStudent(s:Student): Observable<object>{
    console.log("update method calling");
    return this.httpClient.put(`${this.baseURL}`, s);
  }

  deleteStudent(id:number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getStudent(id:number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
  }
}
