import React from "react";
import "./RestaurantCard.css";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlinePlace } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import StatusSwitch from "./css/StatusSwitch";
import TagList from "./TagList";

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

export default function RestaurantCard({ restaurant, onEdit, onDelete }) {
  const { name, phoneNumber, municipalityName, description, restaurantTags = [], image, id } = restaurant;
  const confirm = () => {
    onDelete(id);
  };

  const cancel = () => {
    console.log("Cancelado");
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
      <div className="content">
        <h2 className="labelNameRestaurant">{name}</h2>
        <div className="info-row">
          <IoCallOutline />
          <a
            style={{ textDecoration: "none" }}
            className="referenceWhhp"
            href={`https://wa.me/53${phoneNumber.replace(
              /\s/g,
              ""
            )}?text=${encodeURIComponent(
              "Hola, quiero hacer una reserva en su restaurante."
            )}`}
          >
            <h5 className="numberPhone">{phoneNumber}</h5>
          </a>
        </div>
        <div className="info-row">
          <MdOutlinePlace />
          <h5 className="ubication">La Habana, {municipalityName}</h5>
        </div>
        <p className="paragraph">{description}</p>

        {
          <div className="tag-container">
            <TagList tags={restaurantTags} />
          </div>
        }
      </div>
      <div className="actions">
        <FaEdit className="iconEdit" onClick={() => onEdit(id)} />
        <StatusSwitch restaurantName={name} restaurantId={id} />
      </div>
    </div>
  );
}