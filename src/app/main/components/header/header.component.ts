import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  status: boolean = false;
  userLogin: UserInfo = JSON.parse(localStorage.getItem('userLogin')!);
  adminState: boolean = false;

  signOut() {
    localStorage.removeItem('userLogin');
    window.location.reload();
  }

  checkingAdmin() {
    if (this.userLogin) {
      if (this.userLogin.maLoaiNguoiDung == 'GV') {
        this.adminState = true;
      }
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.checkingAdmin();
  }
}
