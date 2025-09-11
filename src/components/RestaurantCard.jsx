import React from "react";
import { Tag } from "antd";
import "./RestaurantCard.css";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlinePlace } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoFishOutline } from "react-icons/io5";
import { GiBowlOfRice } from "react-icons/gi";
import { Popconfirm } from "antd";
import { QuestionCircleOutlined } from '@ant-design/icons';
import StatusSwitch from "./css/StatusSwitch";
import TagList from "./TagList";

export default function RestaurantCard({ restaurant, onEdit, onDelete }) {
  const { name, phoneNumber, municipalityName, description, restaurantTags = [], image, id } = restaurant;
  const confirm = () => {
    onDelete(id);
  };

  const cancel = () => {
    console.log("Cancelado");
  };

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
      <div className="actions">
        <FaEdit className="iconEdit" onClick={() => onEdit(id)} />
        <StatusSwitch restaurantName={name} restaurantId={id} />
      </div>
    </div>
  );
}