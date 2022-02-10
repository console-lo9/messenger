import NewMessage from 'components/NewMessage/NewMessage';
import useFetch from 'hooks/useFetch';
import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import Main from 'pages/Main';
import { useDispatch } from 'react-redux';
import { FETCH } from 'store/message';

function App() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const fetchData = useFetch('http://localhost:4000/messages');

    useEffect(() => {
        dispatch({
            type: FETCH,
            value: fetchData,
        });
    }, [fetchData]);

    console.log(state, 'state');
    if (!fetchData) return <div>로딩중</div>;
    return (
        <Fragment>
            <GlobalStyle />
            <Main />
        </Fragment>
    );
}

export default App;
