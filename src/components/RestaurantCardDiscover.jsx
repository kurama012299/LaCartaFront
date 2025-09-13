import React from "react";
import "./RestaurantCardDiscover.css";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlinePlace } from "react-icons/md";
import TagList from "./TagList";

export default function RestaurantCardDiscover({ restaurant }) {
  const { name, phoneNumber, municipalityName, description, restaurantTags = [], image, id } = restaurant;

  return (
    <div className="boxPicture">
      <img
        className="image"
        src={image || "https://via.placeholder.com/410x280"}
        alt={name}
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
    </div>
  );
};