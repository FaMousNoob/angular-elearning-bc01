import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/interfaces/course.interface';
import { CourseService } from 'src/app/core/services/course/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categoriesRender: any[] = [1, 2, 3, 4, 5, 6];

  categoryList!: Category[];

  getListCategory() {
    this.courseServive.getListCategory().subscribe((data: any) => {
      this.categoryList = data;
      console.log('categoryList', this.categoryList);
    });
  }

  constructor(private courseServive: CourseService) {}

  ngOnInit(): void {
    this.getListCategory();
  }
}
