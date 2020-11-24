import { isAuthenticated } from '../../hoc/Authentication';

export const {
  user: { _id, name, email, role },
} = isAuthenticated();

export const userLinks = [
  { name: 'My cart', to: '/cart' },
  { name: 'Update profile', to: '/profile/update' },
];

export const userInfo = [
  { name: 'Name', value: `${name}` },
  { name: 'Email', value: `${email}` },
  { name: 'Role', value: `${role === 1 ? 'Admin' : 'Normal user'}` },
];

export const purchaseHisoty = [{ name: 'History', value: `` }];
