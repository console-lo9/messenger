import React from 'react';
import styled from 'styled-components';

const Message = (props) => {
    return (
        <UserMsg>
            <ProfileImage src={props.profileImage} />
            <UserInfo>
                <div>
                    <span>{props.userName}</span>
                    <span>{props.date}</span>
                </div>
                <div>{props.content}</div>
            </UserInfo>
        </UserMsg>
    );
};

const UserMsg = styled.li`
    display: flex;
    position: relative;
    paddign: 4px 20px;
    width: 100%;
    min-height: 28px;
    background: rgb(248, 248, 248);
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
`;
const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
`;

export default Message;
