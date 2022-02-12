import React from 'react';
import { useSelector } from 'react-redux';
import { FaChevronDown } from 'react-icons/fa';
import Logout from 'components/Login/Logout';

import * as S from './styles';

const Header = () => {
    const userName = useSelector((state) => state.user);

    return (
        <S.Header>
            <S.HeaderBox>
                <S.LogoDiv>
                    <S.Logo>C</S.Logo>
                    <S.UnderLineMenu>console.lo9</S.UnderLineMenu>
                    <FaChevronDown style={{ cursor: 'pointer' }} />
                </S.LogoDiv>
                <S.Welcome>
                    안녕하세요 <b>{userName}</b>님!
                </S.Welcome>
            </S.HeaderBox>
            <div>
                <Logout />
            </div>
        </S.Header>
    );
};

export default Header;
