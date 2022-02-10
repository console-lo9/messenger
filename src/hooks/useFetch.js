import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [fetchData, setFetchData] = useState();

    useEffect(() => {
        const getData = async () => {
            const data = await (await fetch(url)).json();
            setFetchData(data);
        };
        getData();
    }, []);

    return fetchData;
};

export default useFetch;
