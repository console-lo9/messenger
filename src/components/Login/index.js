import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from 'store/action/user';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userName, setUserName] = useState('');

    const userNameHandler = (e) => {
        setUserName(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        localStorage.setItem('userName', userName);

        dispatch(login(userName));

        navigate('/main');
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <h1>Login</h1>
                <input
                    placeholder="이름을 입력해주세요"
                    value={userName}
                    onChange={userNameHandler}
                />
                <button>로그인</button>
            </form>
        </div>
    );
};

export default Login;
