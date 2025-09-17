import "./ApiErrorHandler.css";
import { Result, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ApiErrorHandler = ({ error, onRetry, children }) => {
  const navigate = useNavigate();
   const code = error?.code ?? null;
  const errorMsg = error?.message || "Error desconocido";

  useEffect(() => {
    if (code === 401) {
      message.error("Tu sesión ha expirado. Redirigiendo al login...");
      setTimeout(() => {
        localStorage.clear();
        navigate("/login", { replace: true });
      }, 1500);
    }else{
       console.log("🚨 ERROR RECIBIDO EN ApiErrorHandler:", error);
    console.log("CODE:", error?.code);
    console.log("MESSAGE:", error?.message);
    }
  }, [code, navigate]);
  if (!error) return children;
  
  // Si es 401, no renderizamos nada (ya estamos redirigiendo)
  if (code === 401) return null;

  // Función para manejar botón de acción
  const handleAction = () => {
    if (code === 402) {
      navigate("/plan");
    } else if ([403, 404, 500, null].includes(code)) {
      navigate("/");
    } else {
      navigate("/");
    }
  };

  // Contenido según el código de error
  const getErrorContent = () => {
    switch (code) {
      case 403:
        return {
          status: "forbidden",
          title: "Acceso denegado",
          subTitle: "No tienes permisos para ver este contenido.",
          btnText: "Volver al inicio",
        };

      case 404:
        return {
          status: "404",
          title: "Recurso no encontrado",
          subTitle: "La página o recurso que buscas no existe.",
          btnText: "Volver al inicio",
        };

      case 500:
        return {
          status: "500",
          title: "Error del servidor",
          subTitle: "Algo salió mal en nuestro lado. Por favor, intenta más tarde.",
          btnText: "Volver al inicio",
        };

      case null:
        return {
          status: "error",
          title: "Sin conexión",
          subTitle: "Verifica tu conexión a internet e intenta nuevamente.",
          btnText: "Reintentar",
        };

      default:
        return {
          status: "error",
          title: "Error inesperado",
          subTitle: errorMsg || "Ocurrió un problema no esperado.",
          btnText: "Volver al inicio",
        };
    }
  };

  const content = getErrorContent();

  return (
    <div className="full-screen-error">
      <div className="error-container">
        <Result
          status={content.status}
          title={content.title}
          subTitle={content.subTitle}
          extra={
            <Button
              type="primary"
              onClick={handleAction}
              style={{ backgroundColor: "#ff6600", borderColor: "#ff6600" }}
            >
              {content.btnText}
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default ApiErrorHandler;