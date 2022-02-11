import React from 'react';
import * as S from './styles';
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';
import { MdManageSearch } from 'react-icons/md';
import { HiPlus } from 'react-icons/hi';

const SideNav = () => {
    const currentUser = localStorage.getItem('userName');
    return (
        <S.SideNav>
            <S.SummaryBtn>
                <MdManageSearch />
                <span>Browse channels</span>
            </S.SummaryBtn>
            <S.SideMenuWrapper>
                <FaCaretDown />
                <S.UnderLineMenu>Channels</S.UnderLineMenu>
                <HiPlus />
            </S.SideMenuWrapper>
            <S.SideMenuWrapper>
                <span>General</span>
            </S.SideMenuWrapper>
            <S.SideMenuWrapper>
                <FaCaretRight />
                <S.UnderLineMenu>Direct messages</S.UnderLineMenu>
                <HiPlus />
            </S.SideMenuWrapper>
            <S.CurrentUser>
                <span>{currentUser} (me)</span>
                <span></span>
            </S.CurrentUser>
        </S.SideNav>
    );
};

export default SideNav;
