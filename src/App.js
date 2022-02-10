import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import Main from 'pages/Main';

function App() {
    const initialData = useSelector((state) => state);
    console.log(initialData);

    return (
        <Fragment>
            <GlobalStyle />
            <Main />
        </Fragment>
    );
}

export default App;
