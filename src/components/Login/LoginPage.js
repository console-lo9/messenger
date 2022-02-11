import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { LOGIN, LOGOUT } from 'store/user';

const LoginPage = () => {
    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');

    const userIdHandler = (e) => {
        setUserId(e.target.value);
    };
    const userNameHandler = (e) => {
        setUserName(e.target.value);
    };
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        localStorage.setItem('userName', userName);

        dispatch({
            type: LOGIN,
            value: userName,
        });
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <h1>Login</h1>
                <input
                    placeholder="UserId"
                    value={userId}
                    onChange={userIdHandler}
                />
                <input
                    placeholder="UserName"
                    value={userName}
                    onChange={userNameHandler}
                />
                <button>로그인</button>
            </form>
        </div>
    );
};

export default LoginPage;
