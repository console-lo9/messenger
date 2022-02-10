import useFetch from 'hooks/useFetch';
import { Fragment } from 'react';
import GlobalStyle from './GlobalStyle';

function App() {
    useFetch('http://localhost:4000/messages');
    return (
        <Fragment>
            <GlobalStyle />
            <div>App</div>
        </Fragment>
    );
}

export default App;
