import Messages from 'components/Messages';
import NewMessage from 'components/NewMessage/NewMessage';
import React, { useRef } from 'react';
import styled from 'styled-components';
import Modal from 'components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronDown, FaCaretDown, FaCaretRight } from 'react-icons/fa';
import { FiPlusCircle } from 'react-icons/fi';
import { MdManageSearch } from 'react-icons/md';

const Main = () => {
    const MsgBoxRef = useRef();
    const modal = useSelector((state) => state.modal);

    return (
        <MainContainer>
            <Header>
                <span>C</span>
                <span>console.lo9</span>
                <FaChevronDown />
            </Header>
            <SectionRightWrapper>
                <SideNav>
                    <div>
                        <MdManageSearch />
                        <span>Browse channels</span>
                    </div>
                    <div>
                        <FaCaretDown />
                        <span>Channels</span>
                        <FiPlusCircle />
                    </div>
                    <span>General</span>
                    <div>
                        <FaCaretRight />
                        <span>Direct messages</span>
                        <FiPlusCircle />
                    </div>
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
`;

const SectionRightWrapper = styled.div`
    padding-left: 3%;
    display: flex;
    height: 100%;
    width: 100%;
`;

const SideNav = styled.div`
    flex-direction: column;
    display: flex;
    flex: 1 0 15%;
    border-right: 1px solid #e3e4ea;
    font-size: 0.9rem;

    & > div {
        font-weight: 700;
        display: flex;
        align-items: center;
        margin: 10% 0;
        & > svg {
            opacity: 40%;
            font-size: 1rem;
            margin-right: 9px;
        }
    }

    & > div:nth-child(1) {
        font-weight: normal;
        color: dodgerblue;
        margin: 10% 0;

        & > svg {
            opacity: 100%;
            font-size: 1.3rem;
            margin-right: 4px;
        }
    }
    & > span {
        font-weight: 700;
        margin-bottom: 10%;
        background-color: #e6e6e8;
        width: 95%;
        padding: 5% 12%;
        border-radius: 5px;
    }
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

export default Main;
