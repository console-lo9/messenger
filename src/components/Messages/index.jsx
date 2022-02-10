import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
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
                        date={item.date}
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

export default Messages;
