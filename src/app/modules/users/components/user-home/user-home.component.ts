import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from '../../shared/user';
import { UserService } from '../../shared/user.service';
import * as UserActions from '../../state/user.actions';
import { getCurrentUser, getUsers } from '../../state/user.reducer';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit, OnDestroy {
  users = [];
  openDetail = { clearForm: false };
  editItem: any;
  selectedUser: User | null;
  sub: Subscription;

  constructor(private userService: UserService, private store: Store) { }

  ngOnInit(): void {
    this.userService.getUsers().then((data: User[]) => {
      this.store.dispatch(UserActions.loadUsersSuccess({ users: data }));
      this.users = data;
    });
    this.sub = this.store.select(getUsers).subscribe(data => {
      this.users = data;
    })

  }

  setCurrentUser(data) {
    this.openDetail = { clearForm: true };
    this.store.dispatch(UserActions.setCurrentUser({ user: data }))
  }

  clearForm() {
    this.openDetail = { clearForm: true };
    this.store.dispatch(UserActions.clearCurrentUser());
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
