import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/core/interfaces/user.interface';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  userLogin: UserLogin = {
    taiKhoan: '',
    matKhau: '',
  };

  handleLogin() {
    console.log(this.userLogin);
    this.authService.login(this.userLogin).subscribe((data) => {
      window.location.reload();
      localStorage.setItem('userLogin', JSON.stringify(data));
    });
  }

  ngOnInit(): void {}
}
