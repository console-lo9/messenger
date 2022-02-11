import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

const Logout = () => {
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate('/');
    };

    return (
        <S.LogOutWrapper>
            <form onSubmit={onSubmitHandler}>
                <S.LogOutBtn>로그아웃</S.LogOutBtn>
            </form>
        </S.LogOutWrapper>
    );
};

export default Logout;
