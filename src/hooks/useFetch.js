import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [state, setState] = useState();
    useEffect(() => {
        const request = async () => {
            const json = await (await fetch(url)).json();
            console.log(json);
        };
        request();
    }, []);
    return state;
};

export default useFetch;
