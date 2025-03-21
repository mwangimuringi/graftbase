import { useState, useEffect, useCallback } from "react";

const useFetch = (url: string, options?: RequestInit) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(() => {
    if (!url) return;

    setLoading(true);
    setError(null);
    setData(null);

    fetch(url, options)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
