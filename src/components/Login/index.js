import { useEffect, useState } from 'react';
import LoginPage from './LoginPage';
import { useSelector } from 'react-redux';
import Logout from './Logout';
import Main from 'pages/Main';

const Login = () => {
    const user = useSelector((state) => state.userReducer);
    return <div>{!user ? <LoginPage /> : <Main />}</div>;
};

export default Login;
