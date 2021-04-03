import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      const abortCont = new AbortController();

      setTimeout(() => {
        fetch(url, {signal : abortCont.signal})
          .then(res => {
            if(!res.ok) {
              throw Error('404 : Resource not found on server');
            }
            return res.json();
          })
          .then(data => {
            setData(data);
            setError(null);
            setLoading(false);
          })
          .catch(err => {
            if(err.name === 'AbortError')
              console.log('Fetch aborted');
            else {
              setError(err.message);
              setLoading(false);
            }
          })
      }, 1000);

      return () => abortCont.abort();
    }, [url]);

    return {data, isLoading, error};
}

export default useFetch;