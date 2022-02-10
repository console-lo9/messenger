import Messages from 'components/Messages';
import NewMessage from 'components/NewMessage/NewMessage';
import React from 'react';
import styled from 'styled-components';

const Main = () => {
    return (
        <Wrapper>
            <MainWrapper>
                <Messages />
                <NewMessage />
            </MainWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;
const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1000px;
    background-color: #f8f8f8;
`;

export default Main;
