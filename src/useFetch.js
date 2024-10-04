import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
          const fetchData = async () => {
            try {
              const res = await fetch(url);
              if (!res.ok) {
                throw new Error('Failed to fetch blogs');
              }
              const data = await res.json();
              setData(data);
            } catch(err){
              setError(err.message);
            } finally {
              setIsLoading(false);
            }
          }
          fetchData();
        }, 1000);
      }, [url]);

      return { data, isLoading, error }
}

export default useFetch;