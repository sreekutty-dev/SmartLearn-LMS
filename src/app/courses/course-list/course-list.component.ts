import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Course } from '../../shared/models/course.model';
// import { CourseService } from '../course.service';
import { Course } from 'src/app/shared/course.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CourseService } from 'src/app/shared/services/course.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  // courses: Course[] = [];
  courses: any;
  loading = true;
  error = '';


  constructor(private auth: AuthService,private cs: CourseService, private router: Router) { }


  ngOnInit(): void {
    this.cs.getCourses().subscribe({
      next: (data) => { this.courses = data; this.loading = false; },
      error: (err) => { this.error = err?.error?.message || 'Failed to load courses'; this.loading = false; }
    });
  }


  open(course: Course) {
    this.router.navigate(['/courses', course.uid]);
  }


  trackById(_: number, item: Course) {
    return item.uid;
  }

   isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  logout(): void {
    this.auth.logout();
    // optional: clear any stored app state here
    this.router.navigate(['/login']);
  }
}