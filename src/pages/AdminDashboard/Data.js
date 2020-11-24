import { isAuthenticated } from '../../hoc/Authentication';

export const {
  user: { _id, name, email, role },
} = isAuthenticated();

export const userInfo = [
  { name: 'Name', value: `${name}` },
  { name: 'Email', value: `${email}` },
  { name: 'Role', value: `${role === 1 ? 'Admin' : 'Normal user'}` },
];

export const adminLinks = [
  { name: 'Create Category', to: '/create/category' },
  { name: 'Create Product', to: '/create/product' },
];
