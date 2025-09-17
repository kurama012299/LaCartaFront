import { useState, useEffect, useCallback } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null); // 👈 NUEVO: código HTTP

  const fetchData = useCallback(() => {
    const abortController = new AbortController();
    setLoading(true);
    setError(null);
    setStatus(null); // Limpiar estado anterior

    fetch(url, { signal: abortController.signal })
      .then((response) => {
        setStatus(response.status); // 👈 Guardar el código HTTP
        if (!response.ok) {
          return response.text().then((text) => {
            let parsed;
            try {
              parsed = text ? JSON.parse(text) : {};
            } catch (e) {
              parsed = { message: text || "Respuesta no válida" };
            }

            throw {
              status: response.status,
              message: parsed.message || response.statusText,
              details: parsed,
            };
          });
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;

        let errorPayload = {
          code: null,
          message: "Error desconocido",
          details: null,
        };

        if (err.status) {
          errorPayload = {
            code: err.status,
            message: err.message || "Error en la respuesta",
            details: err.details,
          };
        } else {
          errorPayload = {
            code: null,
            message: err.message || "Error de red",
            details: null,
          };
        }

        setError(errorPayload);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      abortController.abort();
    };
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error, // Ahora es un objeto: { code, message, details }
    status, // Código HTTP numérico (200, 404, 500, etc.)
    refetch: fetchData,
  };
}