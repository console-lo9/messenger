import React from 'react';
import { useDispatch } from 'react-redux';

import Button from 'layout/Button';
import { openModal } from 'store/action/modal';
import { MdDelete } from 'react-icons/md';

import styled from 'styled-components';

const MessageRemove = (props) => {
    const dispatch = useDispatch();

    const removeHandler = (event) => {
        const targetId = event.target.id;
        let targetContent = props.content;

        targetContent.length > 10
            ? (targetContent = `${targetContent.slice(0, 10)}...`)
            : (targetContent = targetContent);
        dispatch(openModal('Delete message', targetContent, targetId));
    };

    return (
        <RemoveBtn id={props.id} name={props.date} onClick={removeHandler}>
            <MdDelete />
        </RemoveBtn>
    );
};

const RemoveBtn = styled(Button)`
    color: #b8babe;
`;

export default MessageRemove;
