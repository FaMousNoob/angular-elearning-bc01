import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginGuard } from '../core/guard/auth-login/auth-login.guard';
import { UserInfoGuard } from '../core/guard/auth-user-info/user-info.guard';
import { MainComponent } from './main.component';
import { CategoryComponent } from './pages/category/category.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'course-detail/:id',
        component: CourseDetailComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthLoginGuard],
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
        canActivate: [AuthLoginGuard],
      },
      {
        path: 'user',
        component: UserComponent,
        canActivate: [UserInfoGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
