import styled from 'styled-components';
import { COLOR } from 'utils/constants/styles';

export const Header = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 3%;
    border-bottom: 1px solid ${COLOR.LINE_GREY};
    background: ${COLOR.WHITE};
`;

export const HeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;

    & > svg {
        font-size: 0.8rem;
    }
    & > span {
        font-weight: 400;
    }
`;
export const Logo = styled.span`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 25px;
    height: 25px;
    color: ${COLOR.WHITE};
    background-color: ${COLOR.DEEP_PURPLE};
    border-radius: 5px;
    text-align: center;
    line-height: 22px;
    margin-right: 5px;
    font-size: 0.7rem;
    font-weight: 500;
`;

export const Welcome = styled.div`
    margin-left: 15px;
    font-size: 12px;
`;

export const UnderLineMenu = styled.span`
    font-weight: 700;
    margin: 0 3px;
    cursor: pointer;
    :hover {
        text-decoration: underline;
    }
`;
