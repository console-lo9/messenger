import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Message from './Message';

const Messages = () => {
    const data = useSelector((state) => state);

    console.log(data);
    return (
        <ul>
            {data &&
                data.map((item) => (
                    <Message
                        key={nanoid()}
                        profileImage={item.profileImage}
                        userName={item.userName}
                        content={item.content}
                    >
                        {item.userName}
                    </Message>
                ))}
        </ul>
    );
};

const MessageDiv = styled.div``;

export default Messages;
