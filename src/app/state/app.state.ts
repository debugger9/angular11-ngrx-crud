import { UserState } from '../modules/users/state/user.reducer';

// Representation of the entire app state
// Extended by lazy loaded modules
export interface State {
  user: UserState;
}