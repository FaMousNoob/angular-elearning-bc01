import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/interfaces/course.interface';
import { CourseService } from 'src/app/core/services/course/course.service';
import { ShareCategoryService } from 'src/app/core/share/share-category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(
    private courseService: CourseService,
    private shareCategoryService: ShareCategoryService
  ) {}

  listCategory!: Category[];
  categorySeleted: Category = {
    maDanhMuc: 'BackEnd',
    tenDanhMuc: 'Backend',
    hinhAnhDanhMuc:
      'https://lh3.googleusercontent.com/7wtvGejjLrf4sKXu…EwrzTgD69myVaUm0eAJY7Uu8=w1184-h789-no?authuser=0',
  };
  getListCategory() {
    this.courseService.getListCategory().subscribe((data: any) => {
      console.log(data);
      this.listCategory = data;
    });
  }

  handleSelectCategory(category: Category) {
    this.categorySeleted = category;
    console.log(this.categorySeleted);
    this.shareCategoryService.sharingCategorySelected(this.categorySeleted);
  }

  ngOnInit(): void {
    this.getListCategory();
  }
}
