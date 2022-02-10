import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const MessageRemove = () => {
    const dispatch = useDispatch();
    const message = useSelector((state) => state);

    const handleDelete = (event) => {
        const targetId = event.currentTarget;
        console.log(targetId);
    };
    console.log('ads', message);

    return (
        <>
            <RemoveBtn type="button" value="삭제" onClick={handleDelete} />
        </>
    );
};

const RemoveBtn = styled.input`
    width: 40px;
    height: 20px;
`;

export default MessageRemove;
