import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { LOGOUT } from 'store/user';

const Logout = () => {
    const state = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch({
            type: LOGOUT,
            value: localStorage.getItem('userName'),
        });
        localStorage.clear();
    };
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <button>로그아웃</button>
            </form>
        </div>
    );
};

export default Logout;
