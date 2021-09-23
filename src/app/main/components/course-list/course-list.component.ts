import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/interfaces/course.interface';
import { CourseService } from 'src/app/core/services/course/course.service';
import { ShareCategoryService } from 'src/app/core/share/share-category.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  constructor(
    private courseService: CourseService,
    private shareCategoryService: ShareCategoryService
  ) {}

  courseRender: any[] = [1, 2, 3, 4, 5, 6];

  listCourse!: Course[];

  getListCourseByCategory(codeCategory: any) {
    this.courseService
      .getListCourseByCategory(codeCategory)
      .subscribe((data: any) => {
        this.listCourse = data;
        console.log(this.listCourse);
      });
  }

  ngOnInit(): void {
    this.shareCategoryService.shareCategorySelected.subscribe((category) => {
      console.log(category);
      this.getListCourseByCategory(category.maDanhMuc);
    });
  }
}
