import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/core/interfaces/course.interface';
import { CourseService } from 'src/app/core/services/course/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) {}

  courseDetail!: Course;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      this.courseService.getCourseDetail(params.id).subscribe((data: any) => {
        this.courseDetail = data;

        console.log(this.courseDetail);
      });
    });
  }
}
