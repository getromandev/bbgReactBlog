import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('API Fetched from useffect Hook')
        fetch(url)
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
                console.log(err.message);
                setError(err.message);
                setIsLoading(false);
            })
    }, [url])

    return { data, isLoading, error}
}

export default useFetch;