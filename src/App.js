import useFetch from 'hooks/useFetch';
import { Fragment, useEffect } from 'react';
import GlobalStyle from './GlobalStyle';
import Main from 'pages/Main';
import { FETCH } from 'store';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'components/Modal';

function App() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.message);
    const modal = useSelector((state) => state.modal);

    const fetchData = useFetch('http://localhost:4000/messages');

    useEffect(() => {
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
            <Main />

            {modal.openModal && <Modal title={modal.title} />}
        </Fragment>
    );
}

export default App;
