import React from "react";
import "./DishCard.css";

const getImageUrl = (imagePath) => {
  if (!imagePath) return "https://via.placeholder.com/410x280";

  // Normaliza por si vienen backslashes desde Windows
  const path = String(imagePath).replace(/\\/g, "/");

  // Si ya es absoluta, úsala tal cual
  if (/^https?:\/\//i.test(path)) return path;

  // Toma la base del backend de env (Vite o CRA)
  const base ="http://localhost:8080";

  // Une base + path relativa del backend
  return `${base}${path.startsWith("/") ? "" : "/"}${path}`;
};

const imageUrl = getImageUrl(image);

return (
    <div className="boxPicture">
      <img
        className="image"
        src={imageUrl || "https://via.placeholder.com/410x280"}
        alt={name}
        style={{height:"280px",marginTop:"40px"}}
      />
      </div>
      );
