import styled from 'styled-components';
// Messages  - index.js

export const StyledMessages = styled.ul`
    width: 100%;
    height: 90%;
    overflow: auto;
    background-color: #f8f8f8;
    flex: 1 1 0;
`;

export const MessageDiv = styled.div`
    position: relative;
    background-color: #f1f1f1;
    &:hover {
        .button_box {
            display: block;
        }
    }
`;

export const ButtonBox = styled.div`
    position: absolute;
    display: none;
    top: 50%;
    right: 3%;
    transform: translateY(-60%);
    justify-content: center;

    & > input[type='button'] {
        background-color: aliceblue;
        width: 50px;
        height: 30px;
        border: none;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, 0.2);
    }
`;

// Message - Message.jsx

export const UserMsg = styled.li`
    display: flex;
    position: relative;
    padding: 4px 20px;
    width: 100%;
    min-height: 28px;
    background: rgb(248, 248, 248);
    :hover {
        background: rgb(240, 240, 240);
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    white-space: pre-wrap;
    margin-left: 10px;
    > div {
        margin-bottom: 10px;
    }
    white-space: pre-wrap;
`;

export const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export const UserName = styled.span`
    font-weight: 700;
    margin-right: 10px;
`;
