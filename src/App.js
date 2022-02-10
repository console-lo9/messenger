import useFetch from 'hooks/useFetch';
import { Fragment, useEffect } from 'react';
import GlobalStyle from './GlobalStyle';
import Main from 'pages/Main';
import { FETCH } from 'store';
import { useDispatch, useSelector } from 'react-redux';

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
    if (!state) return <div>로딩중</div>;
    return (
        <Fragment>
            <GlobalStyle />
            <Main />
        </Fragment>
    );
}

export default App;
