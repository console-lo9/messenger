import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from 'store/modal';

import styled from 'styled-components';

const MessageRemove = (props) => {
    const dispatch = useDispatch();
    const modal = useSelector((state) => state.modal);

    const handleRemove = (event) => {
        const targetId = event.target.id;
        let targetContent = props.content;

        targetContent.length > 10
            ? (targetContent = `${targetContent.slice(0, 10)}...`)
            : (targetContent = targetContent);
        dispatch(openModal('Delete message', targetContent, targetId));
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

const RemoveBtn = styled.input``;

export default MessageRemove;
