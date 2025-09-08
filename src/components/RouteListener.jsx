import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from "../hooks/LoadingContext";

const RouteListener = () => {
  const location = useLocation();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    // Activar loader al cambiar de ruta
    setIsLoading(true);

    // Desactivar después de X milisegundos (simulando carga)
    // O bien, podrías esperar a que se carguen datos reales (ver paso 6)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Ajusta este tiempo según necesites

    // Cleanup
    return () => clearTimeout(timer);
  }, [location, setIsLoading]);

  return null;
};

export default RouteListener;