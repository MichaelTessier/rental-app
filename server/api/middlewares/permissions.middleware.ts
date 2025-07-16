import { Context } from '@/apollo/context';
import { rule, shield } from 'graphql-shield';
import { UserRole } from '../__generated__/graphql';

const isAuthenticated = rule({ cache: 'contextual' })((_parent, _args, context: Context) => {
  return context.user !== null;
})

const isAdmin = rule({ cache: 'contextual' })((parent, args, context: Context) => {
  return Boolean(context.user?.role?.includes(UserRole.Admin))
})

export const permissions = shield({
  Query: {
    me: isAuthenticated
  }
})