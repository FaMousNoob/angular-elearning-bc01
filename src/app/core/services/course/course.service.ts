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

  getListCourseByCategory(codeCategory: string) {
    return this.httpClient
      .get(
        `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${codeCategory}&MaNhom=GP12`
      )
      .pipe(catchError((err) => err));
  }

  getCourseDetail(codeCourse: string) {
    return this.httpClient.get(
      `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${codeCourse}`
    );
  }
}
