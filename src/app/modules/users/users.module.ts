import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserHomeComponent } from './components/user-home/user-home.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../users/state/user.reducer';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const routes : Routes = [
  {
    path: 'users', component: UserHomeComponent
  }
]

@NgModule({
  declarations: [
    UserHomeComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('users', userReducer)
  ],
  entryComponents:[
    UserHomeComponent
  ]
})
export class UsersModule { }
