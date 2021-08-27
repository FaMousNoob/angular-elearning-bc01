import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/services/course/course.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(private courseService: CourseService) {}

  listCategory: any[] = [];

  getListCategory() {
    this.courseService.getListCategory().subscribe((data: any) => {
      console.log(data);
      this.listCategory = data;
    });
  }

  ngOnInit(): void {
    this.getListCategory();
  }
}
