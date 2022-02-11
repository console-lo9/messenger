import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import Messages from 'components/Messages';
import NewMessage from 'components/NewMessage/NewMessage';
import arrowDown from 'assets/arrow-down.png';
import star from 'assets/star-btn.png';
import styled from 'styled-components';
import Modal from 'components/Modal';
import Header from 'components/Header';
import SideNav from 'components/SideNav';
import * as S from './styles';
const Main = () => {
    const MsgBoxRef = useRef();
    const modal = useSelector((state) => state.modal);

    return (
        <S.MainContainer>
            <Header />
            <S.SectionRightWrapper>
                <SideNav />
                <S.MainWrapper>
                    <S.ChannelHeader>
                        <S.StarIcon src={star}></S.StarIcon>
                        <S.UnderLineMenu>General</S.UnderLineMenu>
                        <S.ArrowIcon
                            src={arrowDown}
                            style={{ cursor: 'pointer ' }}
                        ></S.ArrowIcon>
                    </S.ChannelHeader>

                    <Messages MsgBox={MsgBoxRef} />
                    <NewMessage MsgBox={MsgBoxRef} />
                </S.MainWrapper>
            </S.SectionRightWrapper>
            {modal.openModal && <Modal title={modal.title} />}
        </S.MainContainer>
    );
};
export default Main;
