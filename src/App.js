import useFetch from 'hooks/useFetch';
import { Fragment, useEffect } from 'react';

import GlobalStyle from './GlobalStyle';
import Main from 'pages/Main';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH } from 'store/message';

function App() {
    const dispatch = useDispatch();
    const fetchData = useFetch('http://localhost:4000/messages');

    useEffect(() => {
        dispatch({
            type: FETCH,
            value: fetchData,
        });
    }, [fetchData]);

    if (!fetchData) return <div>로딩중</div>;
    return (
        <Fragment>
            <GlobalStyle />
            <Main />
        </Fragment>
    );
}

export default App;
