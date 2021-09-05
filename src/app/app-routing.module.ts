import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AuthAdminGuard } from './core/guard/auth-admin.guard';
import { MainModule } from './main/main.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => MainModule,
  },
  {
    path: 'admin',
    loadChildren: () => AdminModule,
    canActivate: [AuthAdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
