import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CategoryComponent } from './pages/category/category.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { CourseItemComponent } from './components/course-item/course-item.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    CourseListComponent,
    CourseDetailComponent,
    CourseItemComponent,
  ],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
