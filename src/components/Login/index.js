import { useState } from 'react';

import Logout from './Logout';
import Main from 'pages/Main';
import { LOGIN, LOGOUT } from 'store/user';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');

    const userIdHandler = (e) => {
        setUserId(e.target.value);
    };
    const userNameHandler = (e) => {
        setUserName(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        localStorage.setItem('userName', userName);
        dispatch({
            type: LOGIN,
            value: userName,
        });
        navigate('main');
    };
    const user = useSelector((state) => state.userReducer);
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

export default Login;
