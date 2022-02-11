import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './styles';

const Message = (props) => {
    const currentUser = useSelector((state) => state.user);

    return (
        <S.UserMsg>
            <S.ProfileImage src={props.profileImage} />
            <S.UserInfo>
                <div>
                    {currentUser === props.userName ? (
                        <S.UserName>{props.userName} *</S.UserName>
                    ) : (
                        <S.UserName>{props.userName}</S.UserName>
                    )}

                    <span> {props.date}</span>
                </div>
                <div>{props.content}</div>
            </S.UserInfo>
        </S.UserMsg>
    );
};

export default Message;
