import Button from 'layout/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from 'store/modal';

import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
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
        <RemoveBtn id={props.id} name={props.date} onClick={handleRemove}>
            <MdDelete />
        </RemoveBtn>
    );
};

const RemoveBtn = styled(Button)`
    color: #b8babe;
`;

export default MessageRemove;
