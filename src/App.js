import NewMessage from 'components/NewMessage/NewMessage';
import useFetch from 'hooks/useFetch';
import { Fragment } from 'react';
import GlobalStyle from './GlobalStyle';

function App() {
    useFetch('http://localhost:4000/messages');
    return (
        <Fragment>
            <GlobalStyle />

            <NewMessage />
        </Fragment>
    );
}

export default App;
