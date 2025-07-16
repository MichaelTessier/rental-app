import { User } from '@/graphql/__generated__/types';
import { makeVar } from '@apollo/client';

type UserState = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isAdmin: boolean;
}

export const initialUserState: UserState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  isAdmin: false,
}

export const userStore = makeVar<UserState>(initialUserState);