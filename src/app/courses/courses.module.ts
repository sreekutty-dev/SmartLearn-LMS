import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../shared/navbar/navbar.component';


@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailsComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    HttpClientModule
  ]
})
export class CoursesModule { }
