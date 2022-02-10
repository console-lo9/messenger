import useFetch from 'hooks/useFetch';
import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import Main from 'pages/Main';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { FETCH } from 'store/message';
=======
>>>>>>> ea4a00f (Fix: 오류 수정)

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
