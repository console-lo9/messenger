import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from 'store/action/user';
import logo from 'assets/logo-small.svg';

import * as S from './styles.js';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userName, setUserName] = useState('');

    const userNameHandler = (e) => {
        const currUserNameValue = e.target.value;

        setUserName(currUserNameValue);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (userName.trim().length === 0) {
            return alert('이름을 한 글자 이상 입력해주세요!');
        }

        localStorage.setItem('userName', userName);
        dispatch(login(userName));
        navigate('/main');
    };

    return (
        <S.Container>
            <S.Header>
                <S.LogoPart src={logo}></S.LogoPart>
            </S.Header>
            <S.SubtminContainer>
                <S.SubmitForm onSubmit={onSubmitHandler}>
                    <S.Label>Join Your Team !</S.Label>
                    <S.Input
                        placeholder="이름을 입력해주세요"
                        value={userName}
                        onChange={userNameHandler}
                    />
                    <S.JoinBtn>참여하기</S.JoinBtn>
                </S.SubmitForm>
            </S.SubtminContainer>
        </S.Container>
    );
};

export default Login;
