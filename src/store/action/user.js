import { LOGIN, LOGOUT } from 'store/action/types';

export const login = (userName) => ({ type: LOGIN, userName });
export const logout = (value) => ({ type: LOGIN, value });
