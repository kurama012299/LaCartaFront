import { useState, useEffect, useCallback } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    const abortController = new AbortController();
    setLoading(true);
    setError(null); // Limpiar error anterior

    fetch(url, { signal: abortController.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        // 👇 SOLO establece error si NO fue abortado
        if (err.name !== "AbortError") {
          setError(err);
        }
        // Si fue AbortError, lo ignoramos silenciosamente
      })
      .finally(() => {
        setLoading(false);
      });

    // Cleanup: abortar si el componente se desmonta
    return () => {
      abortController.abort();
    };
  }, [url]);

  useEffect(() => {
    return fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}