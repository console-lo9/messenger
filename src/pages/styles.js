import styled from 'styled-components';
import { COLOR } from 'utils/constants/styles';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const SectionRightWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: flex-start;
    flex: 4 0 0;
    width: 100%;
    height: auto;
    background-color: ${COLOR.BACK_GROUND_GREY};

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

export const ChannelHeader = styled.div`
    display: flex;
    align-items: center;
    width: inherit;
    min-height: 60px;
    border-bottom: 1px solid ${COLOR.LINE_GREY};
    background-color: ${COLOR.WHITE};
    font: {
        weight: 700;
        size: 16px;
    }
`;

export const StarIcon = styled.img`
    width: 15px;
    height: 14px;
    margin: 10px;
`;

export const ArrowIcon = styled.img`
    width: 11px;
    height: 7px;
    margin: 10px;
`;

export const UnderLineMenu = styled.span`
    cursor: pointer;
    :hover {
        text-decoration: underline;
    }
`;
