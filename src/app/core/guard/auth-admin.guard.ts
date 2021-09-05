import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthAdminGuard implements CanActivate {
  constructor(private router: Router) {}
  private userLogin: any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('userLogin')) {
      this.userLogin = JSON.parse(localStorage.getItem('userLogin')!);
    } else {
      this.router.navigate(['/']);
      return false;
    }
    if (this.userLogin.maLoaiNguoiDung === 'GV') {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
