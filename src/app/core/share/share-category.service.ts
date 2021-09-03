import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root',
})
export class ShareCategoryService {
  private categorySelected = new BehaviorSubject({
    maDanhMuc: 'BackEnd',
    tenDanhMuc: 'Backend',
    hinhAnhDanhMuc:
      'https://lh3.googleusercontent.com/7wtvGejjLrf4sKXu…EwrzTgD69myVaUm0eAJY7Uu8=w1184-h789-no?authuser=0',
  });

  //get data share
  shareCategorySelected = this.categorySelected.asObservable();

  //update data share
  sharingCategorySelected(category: Category) {
    this.categorySelected.next(category);
  }
  constructor() {}
}
