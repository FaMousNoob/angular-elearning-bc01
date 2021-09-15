import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../core/interfaces/user.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  status: boolean = false;
  userLogin: UserInfo = JSON.parse(localStorage.getItem('userLogin')!);

  signOut() {
    localStorage.removeItem('userLogin');
    window.location.reload();
  }
  constructor() {}

  ngOnInit(): void {}
}
