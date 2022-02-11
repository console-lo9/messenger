import React from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_MESSAGE } from 'store';

import styled from 'styled-components';

const MessageRemove = (props) => {
    const dispatch = useDispatch();

    const handleRemove = (event) => {
        const targetId = event.target.id;
        let targetContent = props.content;
        targetContent.length > 10
            ? (targetContent = `${targetContent.slice(0, 10)}...`)
            : (targetContent = targetContent);
        const RemoveCheck = window.confirm(
            `"${targetContent}" 메시지를 삭제하시겠습니까?`
        );
        if (RemoveCheck) {
            dispatch({
                type: REMOVE_MESSAGE,
                payload: targetId,
            });
        } else {
            return;
        }
    };

    return (
        <RemoveBtn
            type="button"
            value="삭제"
            id={props.id}
            name={props.date}
            onClick={handleRemove}
        />
    );
};

const RemoveBtn = styled.input`
    width: 40px;
    height: 20px;
`;

export default MessageRemove;
