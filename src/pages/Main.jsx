import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import Messages from 'components/Messages';
import Modal from 'components/Modal';
import NewMessage from 'components/NewMessage/NewMessage';

import styled from 'styled-components';

const Main = () => {
    const MsgBoxRef = useRef();
    const modal = useSelector((state) => state.modal);

    return (
        <MainContainer>
            <Header>
                <Logo>C</Logo>
                <span>console.lo9</span>
            </Header>
            <SectionRightWrapper>
                <SideNav>
                    <span>Browse channels</span>
                    <span>Channels</span>
                    <span>General</span>
                    <span>Direct messages</span>
                </SideNav>
                <MainWrapper>
                    <ChannelHeader>
                        <span>General</span>
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
    justify-content: center;
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
    flex: 1 0 15%;
    border-right: 1px solid #e3e4ea; ;
`;

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: auto;
    flex: 1 0 85%;
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
    height: 60px;
    border-bottom: 1px solid #e3e4ea;
    display: flex;
    align-items: center;
`;

const Logo = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px;
    width: 20px;
    height: 20px;
`;

export default Main;
