import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from 'assets/logo-small.svg';
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
        <Container>
            <Header>
                <LogoPart src={logo}></LogoPart>
            </Header>
            <SubtminContainer>
                <SubmitForm onSubmit={onSubmitHandler}>
                    <Label>Join ! </Label>
                    <Input
                        placeholder="이름을 입력해주세요"
                        value={userName}
                        onChange={userNameHandler}
                    />
                    <JoinBtn>참여하기</JoinBtn>
                </SubmitForm>
            </SubtminContainer>
        </Container>
    );
};

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    height: 50px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    box-shadow: 0 8px 10px #0000001a;
`;

const LogoPart = styled.img`
    width: 88px;
    height: 28px;
`;

const SubtminContainer = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SubmitForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 30%;
    color: #ff575d;
    background: #f0f0f0;
    box-shadow: 0 8px 10px #0000001a;
`;

const Label = styled.h1`
    padding: 20px;
`;

const Input = styled.input`
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 50%;
    border: none;
    border-bottom: 1px solid #757575;
    margin-bottom: 20px;
    padding: 10px;
`;

const JoinBtn = styled.button`
    margin-bottom: 2rem;
`;
export default Login;
