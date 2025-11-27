import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/shared/course.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  course: any;
  loading = true;
  error = '';

  constructor(
    private auth: AuthService,
    private courseService: CourseService,
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.loadCourse(id);
      }
    });
  }

  loadCourse(id: string): void {
    this.loading = true;
    this.error = '';
    this.courseService.getCourseByUid(id).subscribe({
      next: (data) => {
        this.course = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.error?.message || 'Failed to load course details';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    // navigate back to the course list
    this.router.navigate(['/courses']);
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
