import { API } from '../config';

export const signout = (next) => {
  if (typeof window != 'undefined') {
    localStorage.removeItem('jwt');
    next();
    return fetch(`${API}/signout`, {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
