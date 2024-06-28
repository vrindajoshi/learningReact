import { useEffect, useState } from "react";

// custom hooks (functions) MUST start with use
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // stop fetch request when not needed anymore
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok){
                    throw Error("could not fetch data for that resource");
                }
                return res.json();
            })
            .then(data => {
                setData(data)
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log('fetch aborted')
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
            })
        }, 1000);

        return () => abortCont.abort();

    }, [url]);

    return {data, isPending, error};
}

export default useFetch;