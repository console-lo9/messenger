import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import styled, { useTheme } from 'styled-components';
import Message from './Message';
import MessageRemove from './MessageRemove';

const Messages = () => {
    const data = useSelector((state) => state);

    console.log(data);
    return (
        <ul>
            {data &&
                data.map((item) => (
                    <MessageDiv key={nanoid()}>
                        <Message
                            profileImage={item.profileImage}
                            userName={item.userName}
                            content={item.content}
                        >
                            {item.userName}
                        </Message>
                        <MessageRemove date={item.date} />
                    </MessageDiv>
                ))}
        </ul>
    );
};

const MessageDiv = styled.div``;

export default Messages;
