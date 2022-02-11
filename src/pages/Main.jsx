import React, { Fragment, useRef } from 'react';
import { useSelector } from 'react-redux';

import Messages from 'components/Messages';
import Modal from 'components/Modal';
import NewMessage from 'components/NewMessage/NewMessage';

import arrowDown from 'assets/arrow-down.png';
import star from 'assets/star-btn.png';

import styled from 'styled-components';

const Main = () => {
    const MsgBoxRef = useRef();
    const modal = useSelector((state) => state.modal);
    const currentUser = localStorage.getItem('userName');

    return (
        <Fragment>
            <MainContainer>
                <Header>
                    <Logo>C</Logo>
                    <span>console.lo9</span>
                </Header>
                <SectionRightWrapper>
                    <SideNav>
                        <div>
                            <SummaryBtn>
                                <i></i>
                                Browse channels
                            </SummaryBtn>
                        </div>

                        <SideMenuWrapper>
                            <span>Channerls</span>
                        </SideMenuWrapper>

                        <SideMenuWrapper>
                            <span>General</span>
                        </SideMenuWrapper>

                        <SideMenuWrapper>
                            <span>Direct messages</span>
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
            </MainContainer>
            {modal.openModal && <Modal title={modal.title} />}
        </Fragment>
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
    justify-content: center;
    background: #fff;

    & > span:nth-child(1) {
        display: flex;
        width: 25px;
        height: 25px;
        color: #ffffff;
        background-color: #6011ba;
        border-radius: 5px;
        text-align: center;
        margin-right: 5px;
    }
    span {
        font-weight: 700;
    }
`;

const SectionRightWrapper = styled.div`
    padding-left: 3%;
    display: flex;
    height: 100%;
    width: 100%;
`;

const SideNav = styled.div`
    display: flex;
    flex-direction: column;
    flex: 15;
    border-right: 1px solid #e3e4ea;
`;

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: auto;
    flex: 85;
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
    width: 240px;
    height: 30px;
    margin: 20px 10px 12px;
    padding: 0;
    color: #478bff;
    font-size: 14px;
    font-weight: 400;
    border: 0;
    border-radius: 4px;
    background: none;
    box-sizing: border-box;
    text-decoration: none;
    cursor: pointer;
`;
const SideMenuWrapper = styled.div`
    display: flex;

    position: -webkit-sticky;
    position: sticky;
    top: -1px;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    margin-bottom: 4px;
    padding: 0 4px;
    box-sizing: border-box;
    /* background: #fff; */
    z-index: 99;

    span {
        font-weight: 700;
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
