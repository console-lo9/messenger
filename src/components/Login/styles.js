import styled from 'styled-components';
import { COLOR } from 'utils/constants/styles.js';
// Login - index.js

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    height: 50px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    box-shadow: 0 8px 10px ${COLOR.SHADOW_BLACK};
`;

export const LogoPart = styled.img`
    width: 88px;
    height: 28px;
`;

export const SubtminContainer = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SubmitForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 30%;
    color: ${COLOR.SWIT_RED};
    background: ${COLOR.LIGHTER_GREY};
    box-shadow: 0 8px 10px ${COLOR.SHADOW_BLACK};
`;

export const Label = styled.h1`
    padding: 20px;
`;

export const Input = styled.input`
    display: block;
    width: 50%;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    margin-bottom: 20px;
    border: {
        none
        bottom:  1px solid ${COLOR.LINE_BLACK};
    }
`;

export const JoinBtn = styled.button`
    margin-bottom: 2rem;
`;

export const LogOutBtn = styled.button`
    color: ${COLOR.BUTTON_BLUE};
    font-weight: 700;
`;

export const LogOutWrapper = styled.div`
    margin-right: 3rem;
`;
