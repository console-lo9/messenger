import React, { Fragment, useRef } from 'react';
import { useSelector } from 'react-redux';

import Messages from 'components/Messages';
import NewMessage from 'components/NewMessage/NewMessage';

import arrowDown from 'assets/arrow-down.png';
import star from 'assets/star-btn.png';

import styled from 'styled-components';
import Modal from 'components/Modal';
import { FaChevronDown, FaCaretDown, FaCaretRight } from 'react-icons/fa';
import { MdManageSearch } from 'react-icons/md';
import { HiPlus } from 'react-icons/hi';

const Main = () => {
    const MsgBoxRef = useRef();
    const modal = useSelector((state) => state.modal);
    const currentUser = localStorage.getItem('userName');

    return (
        <MainContainer>
            <Header>
                <Logo>C</Logo>
                <span>console.lo9</span>
                <FaChevronDown />
            </Header>
            <SectionRightWrapper>
                <SideNav>
                    <SummaryBtn>
                        <MdManageSearch />
                        <span>Browse channels</span>
                    </SummaryBtn>
                    <SideMenuWrapper>
                        <FaCaretDown />
                        <span>Channels</span>
                        <HiPlus />
                    </SideMenuWrapper>
                    <SideMenuWrapper>
                        <span>General</span>
                    </SideMenuWrapper>
                    <SideMenuWrapper>
                        <FaCaretRight />
                        <span>Direct messages</span>
                        <HiPlus />
                    </SideMenuWrapper>
                    <CurentUser>
                        <span>{currentUser} (me)</span>
                        <span></span>
                    </CurentUser>
                </SideNav>
                <MainWrapper>
                    <ChannelHeader>
                        <StarIcon src={star}></StarIcon>
                        <span>General</span>
                        <ArrowIcon src={arrowDown}></ArrowIcon>
                    </ChannelHeader>

                    <Messages MsgBox={MsgBoxRef} />
                    <NewMessage MsgBox={MsgBoxRef} />
                </MainWrapper>
            </SectionRightWrapper>
            {modal.openModal && <Modal title={modal.title} />}
        </MainContainer>
    );
};

const MainContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 3%;
    border-bottom: 1px solid #e3e4ea;
    background: #fff;

    & > span:nth-child(1) {
        display: inline-block;
        width: 25px;
        height: 25px;
        color: #ffffff;
        background-color: #6011ba;
        border-radius: 5px;
        text-align: center;
        line-height: 22px;
        margin-right: 5px;
        font-size: 0.7rem;
        font-weight: 500;
    }
    & > span:nth-child(2) {
        font-weight: 600;
        margin-right: 3px;
    }
    & > svg {
        font-size: 0.8rem;
    }
    span {
        font-weight: 700;
    }
    span {
        font-weight: 700;
    }
`;

const SectionRightWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;

const SideNav = styled.div`
    flex-direction: column;
    display: flex;
    flex: 1 0 0;
    border-right: 1px solid #e3e4ea;
    font-size: 0.9rem;
`;

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: auto;
    flex: 4 0 0;
    position: relative;
    background-color: #f8f8f8;

    & > div:nth-child(1) {
        flex: 1 0 0;
    }
    & > ul:nth-child(2) {
        flex: 12 0 0;
    }
    & > div:nth-child(3) {
        flex: 1 0 0;
    }
`;

const ChannelHeader = styled.div`
    width: inherit;
    min-height: 60px;
    border-bottom: 1px solid #e3e4ea;
    display: flex;
    align-items: center;
    background-color: #fff;
    font-weight: 700;
    font-size: 16px;
`;
const Logo = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px;
    width: 20px;
    height: 20px;
`;

const SummaryBtn = styled.button`
    display: flex;
    align-items: center;
    height: 25px;
    padding: 5% 2%;
    margin: 10% 5%;
    color: #478bff;
    font-size: 14px;
    font-weight: 400;
    border: 0;
    border-radius: 4px;
    background: none;
    box-sizing: border-box;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        background-color: #e4e4e4c0;
    }
    & > svg {
        opacity: 100%;
        font-size: 1.3rem;
        margin-right: 4px;
    }
`;
const SideMenuWrapper = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    padding: 3% 7px;
    margin: 0 5% 3%;
    position: relative;

    &:nth-child(3) {
        padding: 3% 32px;
        margin-bottom: 10%;
        background-color: #e6e6e8;
        border-radius: 5px;
        cursor: pointer;
    }

    & > svg:nth-child(1) {
        opacity: 40%;
        font-size: 1rem;
        margin-right: 9px;
        cursor: pointer;
    }
    & > svg:nth-child(3) {
        opacity: 40%;
        background-color: #d4d0d0;
        font-size: 1.2rem;
        padding: 2px;
        border-radius: 9999px;
        cursor: pointer;
        position: absolute;
        right: 5px;
        &:hover {
            opacity: 100%;
        }
    }
    & > span {
        cursor: pointer;
    }
`;

const StarIcon = styled.img`
    width: 15px;
    height: 14px;
    margin: 10px;
`;

const ArrowIcon = styled.img`
    width: 11px;
    height: 7px;
    margin: 10px;
`;

const CurentUser = styled.div`
    display: flex;
    align-items: center;
    padding: 0 28px;
    margin: 0 5%;
    cursor: pointer;

    &:hover {
        background-color: #e4e4e4c0;
    }

    & > span:nth-child(1) {
        min-width: 0;
        padding-left: 5px;
        font-size: 14px;
        vertical-align: middle;
        line-height: 36px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: #8b8e95;
    }

    & > span:nth-child(2) {
        margin-left: 6px;
        background: #8ac917;
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        vertical-align: middle;
    }
`;
export default Main;
