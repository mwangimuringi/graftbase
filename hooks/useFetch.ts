import { useState, useEffect, useCallback } from "react";

type FetchResponse<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
};

/**
 * useFetch - A reusable React hook for fetching API data.
 * 
 * @param url API endpoint to fetch data from.
 * @param options Optional fetch options (headers, method, etc.).
 * @returns An object containing data, loading state, error, and a refetch function.
 */
const useFetch = <T>(url: string, options?: RequestInit): FetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
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
        return response.json() as Promise<T>;
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
