import styled from 'styled-components';
import { COLOR } from 'utils/constants/styles';

export const SideNav = styled.div`
    flex-direction: column;
    display: flex;
    flex: 1 0 0;
    border-right: 1px solid ${COLOR.LIGHT_BLUE};
    font-size: 0.9rem;
`;

export const SummaryBtn = styled.button`
    display: flex;
    align-items: center;
    height: 25px;
    padding: 5% 2%;
    margin: 10% 5%;
    color: ${COLOR.BUTTON_BLUE};
    font-size: 14px;
    font-weight: 400;
    background: none;
    box-sizing: border-box;
    text-decoration: none;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: ${COLOR.HOVER_GRAY};
    }
    & > svg {
        opacity: 100%;
        font-size: 1.3rem;
        margin-right: 4px;
    }
`;
export const SideMenuWrapper = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    padding: 3% 7px;
    margin: 0 5% 3%;
    position: relative;

    &:nth-child(3) {
        padding: 3% 32px;
        margin-bottom: 10%;
        background-color: ${COLOR.INPUT_LIGHTGRAY};
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
        background-color: ${COLOR.DEEP_GREY};
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

export const CurrentUser = styled.div`
    display: flex;
    align-items: center;
    padding: 0 28px;
    margin: 0 5%;
    cursor: pointer;

    &:hover {
        background-color: ${COLOR.HOVER_GRAY};
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
        color: ${COLOR.DEEP_DARK_GREY};
    }

    & > span:nth-child(2) {
        margin-left: 6px;
        background: ${COLOR.GREEN};
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        vertical-align: middle;
    }
`;

export const UnderLineMenu = styled.span`
    cursor: pointer;
    :hover {
        text-decoration: underline;
    }
`;
