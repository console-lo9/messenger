import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Message from './Message';

const Messages = () => {
    const data = useSelector((state) => state);

    console.log(data);
    return (
        <StyledMessages>
            {data &&
                data.map((item) => (
                    <Message
                        key={nanoid()}
                        profileImage={item.profileImage}
                        userName={item.userName}
                        date={item.date}
                        content={item.content}
                    >
                        {item.userName}
                    </Message>
                ))}
        </StyledMessages>
    );
};

const StyledMessages = styled.ul`
    width: 80%;
    height: 80%;
    background: rgb(248, 248, 248);
    overflow: auto;
`;
export default Messages;
