import styled from 'styled-components';
import { COLOR } from 'utils/constants/styles';

// Messages  - index.js
export const StyledMessages = styled.ul`
    padding-top: 20px;
    width: 100%;
    height: 90%;
    overflow: auto;
    background-color: ${COLOR.BACK_GROUND_GREY};
    flex: 1 1 0;
`;

export const MessageDiv = styled.div`
    margin-bottom: 10px;
    position: relative;
    background-color: ${COLOR.DARKER_GREY};
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
`;

// Message - Message.jsx

export const UserMsg = styled.li`
    display: flex;
    position: relative;
    padding: 4px 20px;
    width: 100%;
    min-height: 28px;
    background: ${COLOR.BACK_GROUND_GREY};
    :hover {
        background: ${COLOR.LIGHTER_GREY};
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
    cursor: pointer;
`;

export const UserInfoDiv = styled.div`
    display: flex;
    align-items: center;
`;
export const UserName = styled.span`
    font-weight: 700;
    margin-right: 10px;
    cursor: pointer;
`;

export const DateSpan = styled.span`
    color: ${COLOR.FOCUS_GRAY};
    font-size: 12px;
`;
