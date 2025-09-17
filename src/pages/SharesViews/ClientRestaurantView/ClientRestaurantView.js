import "./ClientRestaurantView.css";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header";
import ApiErrorHandler from "../../../components/ApiErrorHandler";
import { useFetch } from "../../../services/useFetch";
import { Result } from "antd";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlinePlace } from "react-icons/md";
import React from "react";

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

const ClientRestaurantView =()=>{
 
 const { id } = useParams();

 const url = `http://localhost:8080/restaurants/${id}`;

  const { data: restaurant, loading, error, refetch } = useFetch(url);
  const image = restaurant?.image;
  const imageUrl = getImageUrl(image);



    return (
      <body className="bodyClient">
        <Header />
        <ApiErrorHandler error={error} onRetry={refetch}>
        <div className="boxPictureClient">
          <img src={imageUrl} className="picture" alt={restaurant?.name}></img>
            {loading ? (
              <p>Cargando...</p>
            ) : !restaurant ? (
              <Result status="404" title="Restaurante no encontrado" />
            ) : (
              <div className="boxPictureInfo">
                <h3 className="labelNameRestaurant">{restaurant?.name}</h3>
                <h3 className="labelSubFood">Auténtica cocina italiana con ingredientes frescos y recetas tradicionales</h3>
                <h3 className="labelSubPhone">{restaurant?.phoneNumber}</h3>
                <IoCallOutline size={48} className="iconPlace"/>
              </div>
            )}
            </div>
          </ApiErrorHandler>
        
        <h1>{id}</h1>
         <IoCallOutline size={48} className="iconPlace"/>
      </body>
    );
}

export default ClientRestaurantView;