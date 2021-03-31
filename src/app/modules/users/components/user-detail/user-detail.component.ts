import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getCurrentUser, getUsers } from '../../state/user.reducer';
import * as UserActions from '../../state/user.actions';
import { User } from '../../shared/user';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  newUserForm: FormGroup;
  currentUser: User;
  update: boolean = false;
  id: number;
  sub: Subscription;
  constructor(private formBuilder: FormBuilder, private store: Store) {
  }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
    });
    this.store.select(getUsers).subscribe(data => this.id = data.length);

    this.sub = this.store.select(getCurrentUser).subscribe(currentUser => {
      if (currentUser && this.newUserForm) {
        this.newUserForm.get('id').setValue(`${currentUser.id}`);
        this.newUserForm.get('name').setValue(`${currentUser.name}`);
        this.newUserForm.get('username').setValue(`${currentUser.username}`);
        this.newUserForm.get('email').setValue(`${currentUser.email}`);
        this.newUserForm.get('phone').setValue(`${currentUser.phone}`);
      }
      else {
        this.newUserForm.reset();
        this.newUserForm.get('id').setValue(this.id + 1);
      }
    })
  }
  async createNewUser() {
    if (this.newUserForm.valid) {
      this.sub = this.store.select(getCurrentUser).subscribe(data => this.currentUser = JSON.parse(JSON.stringify(data)));
      if (this.currentUser) {
        this.update = true;
        this.currentUser.name = this.newUserForm.get('name').value;
        this.currentUser.username = this.newUserForm.get('username').value;
        this.currentUser.email = this.newUserForm.get('email').value;
      }
      else {
        this.update = false;
        this.store.dispatch(UserActions.createUserSuccess({ user: this.newUserForm.value }));
      }
      if (this.update) {
        this.store.dispatch(UserActions.updateUserSuccess({ user: this.currentUser }));
      }
    }
  }
}