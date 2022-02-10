import React from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_MESSAGE } from 'store';

import styled from 'styled-components';

const MessageRemove = (props) => {
    const dispatch = useDispatch();

    const handleDelete = (event) => {
        const targetId = event.target.id;

        dispatch({
            type: REMOVE_MESSAGE,
            payload: targetId,
        });
    };

    return (
        <RemoveBtn
            type="button"
            value="삭제"
            id={props.commentId}
            name={props.date}
            onClick={handleDelete}
        />
    );
};

const RemoveBtn = styled.input`
    width: 40px;
    height: 20px;
`;

export default MessageRemove;
