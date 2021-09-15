import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { CourseManagementComponent } from './pages/course-management/course-management.component';


@NgModule({
  declarations: [
    AdminComponent,
    UserManagementComponent,
    CourseManagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
