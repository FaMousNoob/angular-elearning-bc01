import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/core/interfaces/course.interface';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent implements OnInit {
  @Input() course!: Course;

  constructor() {}

  ngOnInit(): void {}
}
