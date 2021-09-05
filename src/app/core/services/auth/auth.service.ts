import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../../interfaces/user.interface';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(userLogin: UserLogin) {
    return this.httpClient
      .post(
        `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
        userLogin
      )
      .pipe(catchError((err) => err));
  }
}
