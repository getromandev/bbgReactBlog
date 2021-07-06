import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        console.log('API Fetched from useffect Hook')
        
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    console.log('res', res)
                    // if the response is not ok throw error 
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource')
                    }
                    return res.json();
                })
                .then(data => {
                    console.log('json data', data)
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('Fetch Aborted')
                    } else {
                        console.log(err.message);
                        setError(err.message);
                        setIsLoading(false);
                    }
                })
        }, 1000)

            return () => abortCont.abort();
    }, [url])

    return { data, isLoading, error}
}

export default useFetch;