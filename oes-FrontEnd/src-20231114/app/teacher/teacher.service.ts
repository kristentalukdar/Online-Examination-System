import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Teacher } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseURL = "http://localhost:9090/api/v1/teacher";

  constructor(private httpClient: HttpClient) { }

  getTeacherList(): Observable<Teacher[]>{
    return this.httpClient.get<Teacher[]>(`${this.baseURL}`);
  }

  saveTeacher(t:Teacher): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, t);
  }

  updateTeacher(t:Teacher): Observable<object>{
    return this.httpClient.put(`${this.baseURL}`, t);
  }

  deleteTeacher(id:number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getTeacher(id:number): Observable<Teacher>{
    return this.httpClient.get<Teacher>(`${this.baseURL}/${id}`);
  }
}
