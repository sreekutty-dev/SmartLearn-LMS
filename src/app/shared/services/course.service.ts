import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Course } from '../course.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = environment.apiBase;

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getCourses(): Observable<Course[]> {
    const url = `${this.baseUrl}/course/`;
    return this.http.get<any>(url, { headers: this.getHeaders() }).pipe(
      map(response => response.results || response)
    );
  }

  getCourse(id: number): Observable<Course> {
    const url = `${this.baseUrl}/course/${id}`;
    return this.http.get<Course>(url, { headers: this.getHeaders() });
  }

  getCourseByUid(uid: string): Observable<Course> {
    const url = `${this.baseUrl}/course/${uid}`;
    return this.http.get<Course>(url, { headers: this.getHeaders() });
  }
}
