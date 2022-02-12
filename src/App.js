import useFetch from 'hooks/useFetch';
import { Fragment, useEffect } from 'react';
import GlobalStyle from './GlobalStyle';
import Main from 'pages/Main';
import { LOGIN, FETCH } from 'store/action/types';
import { useDispatch, useSelector } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import Login from 'components/Login';
function App() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.message);

    const fetchData = useFetch('/messages');

    const userName = localStorage.getItem('userName');

    useEffect(() => {
        dispatch({
            type: LOGIN,
            userName: userName,
        });

        if (fetchData) {
            dispatch({
                type: FETCH,
                value: fetchData,
            });
        }
    }, [fetchData]);
    if (!state) return <div>로딩중</div>;
    return (
        <Fragment>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </Fragment>
    );
}

export default App;
