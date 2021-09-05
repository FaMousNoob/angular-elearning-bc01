import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  status: boolean = false;
  userOption: boolean = false;
  userLogin: any = JSON.parse(localStorage.getItem('userLogin')!);
  adminState: boolean = false;

  signOut() {
    localStorage.removeItem('userLogin');
    window.location.reload();
  }

  checkingAdmin() {
    if (localStorage.getItem('userLogin')) {
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
