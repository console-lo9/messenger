import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from 'store/action/user';

const Logout = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const currentUserName = localStorage.getItem('userName');

        dispatch(logout(currentUserName));
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
