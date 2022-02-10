import React from 'react';
import { useDispatch } from 'react-redux';
import { removeMessage } from 'store/message';
import styled from 'styled-components';

const MessageRemove = (props) => {
    const dispatch = useDispatch();

    const handleDelete = (event) => {
        const targetId = event.target.name;
        dispatch(removeMessage(targetId));
    };

    return (
        <>
            <RemoveBtn
                type="button"
                value="삭제"
                name={props.date}
                onClick={handleDelete}
            />
        </>
    );
};

const RemoveBtn = styled.input`
    width: 40px;
    height: 20px;
`;

export default MessageRemove;
