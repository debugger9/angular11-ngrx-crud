import { User } from '../shared/user';

/* NgRx */
import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as UserActions from './user.actions';
import * as AppState from '../../../state/app.state';

// Extends the app state to include the User feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.
export interface State extends AppState.State {
  users: UserState;
}

// State for this feature (Product)
export interface UserState {
  clearForm: boolean;
  currentUser: User;
  users: User[];
  error: string;
}

const initialState: UserState = {
  clearForm: false,
  currentUser: null,
  users: [],
  error: ''
};

// Selector functions
const getUserFeatureState = createFeatureSelector<UserState>('users');

export const clearForm = createSelector(
  getUserFeatureState,
  state => state.clearForm
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);

export const getUsers = createSelector(
  getUserFeatureState,
  state => state.users
);

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserActions.setCurrentUser, (state, action): UserState => {
    return {
      ...state,
      currentUser: action.user
    };
  }),

  on(UserActions.createUserSuccess, (state, action): UserState => {
    return {
      ...state,
      users: [...state.users, action.user]
    }
  }),

  on(UserActions.createUserFailure, (state, action): UserState => {
    return {
      ...state,
      error: action.error
    }
  }),

  on(UserActions.updateUserSuccess, (state, action): UserState => {
    const updatedUsers = state.users.map(
      item => action.user.id === item.id ? action.user : item);
    return {
      ...state,
      users: updatedUsers,
      currentUser: action.user
    }
  }),

  on(UserActions.updateUserFailure, (state, action): UserState => {
    return {
      ...state,
      error: action.error
    };
  }),

  on(UserActions.loadUsersSuccess, (state, action): UserState => {
    return {
      ...state,
      users: action.users
    }
  }),

  on(UserActions.clearCurrentUser, (state): UserState => {
    return {
      ...state,
      currentUser: null
    };
  }),

  on(UserActions.initializeCurrentUser, (state): UserState => {
    return {
      ...state,
      // currentUser: {
      //   id: 0,
      //   name: '',
      //   username: '',
      //   email: '',
      // }
    };
  }),

  on(UserActions.clearForm, (state, action): UserState => {
    return {
      ...state,
      clearForm: action.clearForm
    }
  })
);