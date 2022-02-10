import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MessageRemove from './MessageRemove';

const Messages = () => {
    const data = useSelector((state) => state);

    console.log(data);
    return (
        <ul>
            {data &&
                data.map((item) => (
                    <MessageDiv key={nanoid()}>
                        <li>{item.userId}</li>
                        <li>{item.userName}</li>
                        <li>{item.profileImage}</li>
                        <li>{item.content}</li>
                        <li>{item.date}</li>
                        <MessageRemove />
                    </MessageDiv>
                ))}
        </ul>
    );
};

const MessageDiv = styled.div``;

export default Messages;
