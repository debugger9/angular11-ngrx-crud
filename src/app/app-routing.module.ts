import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [{
      path: '',
      component: HomePageComponent,
      pathMatch: 'full'
    }]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule),
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
