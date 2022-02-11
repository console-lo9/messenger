import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

const Message = (props) => {
    const currentUser = useSelector((state) => state.userReducer);

    return (
        <UserMsg>
            <ProfileImage src={props.profileImage} />
            <UserInfo>
                <div>
                    {currentUser === props.userName ? (
                        <UserName>{props.userName} *</UserName>
                    ) : (
                        <UserName>{props.userName}</UserName>
                    )}

                    <span> {props.date}</span>
                </div>
                <div>{props.content}</div>
            </UserInfo>
        </UserMsg>
    );
};

const UserMsg = styled.li`
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

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    white-space: pre-wrap;
    margin-left: 10px;
    > div {
        margin-bottom: 10px;
    }
    white-space: pre-wrap;
`;

const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const UserName = styled.span`
    font-weight: 700;
    margin-right: 10px;
`;

export default Message;
