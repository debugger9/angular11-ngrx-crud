import { User } from '../shared/user';

import { createAction, props } from '@ngrx/store';


export const setCurrentUser = createAction(
  '[User] Set Current User',
  props<{ user: User }>()
);

export const createUser = createAction(
  '[User] Create User',
  props<{ user: User }>()
);

export const createUserSuccess = createAction(
  '[User] Create User Success',
  props<{ user: User }>()
);

export const createUserFailure = createAction(
  '[User] Create User Fail',
  props<{ error: string }>()
);

export const updateUser = createAction(
  '[User] Update User',
  props<{ user: User }>()
)

export const updateUserSuccess = createAction(
  '[User] Update User Success',
  props<{ user: User }>()
);

export const updateUserFailure = createAction(
  '[User] Update User Fail',
  props<{ error: string }>()
);

export const clearCurrentUser = createAction(
  '[User] Clear Current User'
);

export const clearForm = createAction(
  '[User] Clear Form',
  props<{ clearForm: boolean }>()
);

export const initializeCurrentUser = createAction(
  '[User] Initialize Current User'
);

export const loadUsers = createAction(
  '[User] Load'
);

export const loadUsersSuccess = createAction(
  '[User] Load Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Fail',
  props<{ error: string }>()
);