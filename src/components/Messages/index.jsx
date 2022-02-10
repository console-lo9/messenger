import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

const Messages = () => {
    const data = useSelector((state) => state);

    console.log(data);
    return (
        <ul>
            {data &&
                data.map((item) => <li key={nanoid()}>{item.userName}</li>)}
        </ul>
    );
};

export default Messages;
