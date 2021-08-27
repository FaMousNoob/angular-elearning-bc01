import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private httpClient: HttpClient) {}

  getListCategory() {
    return this.httpClient
      .get(`https://60bd865bace4d50017aab194.mockapi.io/DanhMucKhoaHoc`)
      .pipe(catchError((err) => err));
  }
}
