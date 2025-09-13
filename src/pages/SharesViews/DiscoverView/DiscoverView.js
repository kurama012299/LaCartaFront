import React from "react";
import "./DiscoverView.css";
import Header from "../../../components/Header";
import { Button } from "antd";
import Icon from "../../../components/Icon";
import EspaghettiIcon from "../../../assets/icons/icon-espaghetti.png.png";
import Tacos from "../../../assets/icons/icon-tacos.png";
import Sushi from "../../../assets/icons/icon-sushi.png";
import RiceIcon from "../../../assets/icons/icon-arroz.png"; 
import InternationalIcon from "../../../assets/icons/icon-internacional.png"; 
import AmericanIcon from "../../../assets/icons/icon-hamburguesa.png"; 
import ChineseIcon from "../../../assets/icons/icon-dumpling.png";
import MeatIcon from "../../../assets/icons/icon-carne.png";
import RestaurantCardDiscover from "../../../components/RestaurantCardDiscover";
import { useFetch } from "../../../services/useFetch";
import { useState } from "react";
import NoRestaurantIcon from "../../../assets/icons/icon-no-comida.png";
import {Alert} from "antd";

const DiscoverView = () => {
    
    const [selectedCategory, setSelectedCategory] = useState(null);
    
  
   const cuisines = [
    { name: "Italiana", icon: EspaghettiIcon },
    { name: "Japonesa", icon: Sushi },
    { name: "Mexicana", icon: Tacos },
    { name: "Criolla", icon: MeatIcon },
    { name: "Internacional", icon: InternationalIcon },
    { name: "Americana", icon: AmericanIcon },
    { name: "China", icon: ChineseIcon },
    { name : "Koreana", icon: RiceIcon },
  ];

  const { data, loading, error } = useFetch("http://localhost:8080/restaurants");

  const filteredRestaurants = selectedCategory
  ? data.filter(restaurant => restaurant.cuisineType?.includes(selectedCategory))
  : data;

    if (loading) return <div>Cargando restaurantes...</div>;
    if (error) return <div>Error al cargar: {error.message}</div>;
    if (!data || data.length === 0) return <div>No hay restaurantes disponibles.</div>;



  return (
    <div className="discover-container">
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <h1 className="title">Descubre Restaurantes Increíbles</h1>
        <p className="subtitle">
          Explora menús digitales de restaurantes locales y encuentra tu próxima
          comida favorita
        </p>

        {/* Categorías Populares */}
        <div className="categories-section">
          <Button
            className="viewAllButton"
            onClick={() => setSelectedCategory(null)}
            size="middle"
            type="primary"
          >
            Ver todos
          </Button>
          <h3 className="category-title">¿Qué comida deseas comer hoy?</h3>

          <div className="categories-grid">
            {cuisines.map((cuisine) => (
              <Button
                className={`category-button ${
                  selectedCategory === cuisine.name ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(cuisine.name)}
                icon={<Icon src={cuisine.icon} size={20} />}
                type="primary"
                size="middle"
              >
                {cuisine.name}
              </Button>
            ))}
          </div>
        </div>
      </section>
      <section className="restaurants-section">
        <h2 className="restaurants-title">Todos los restaurantes</h2>
        <p className="restaurants-subtitle">
          {filteredRestaurants.length} restaurantes encontrados
        </p>
        {filteredRestaurants.length === 0 && selectedCategory !== null ? (
          <div className="BoxiconNoRestaurant">
            <img
              src={NoRestaurantIcon}
              style={{ width: "32px", height: "32px", alignContent: "center" }}
            ></img>
            <h2 style={{ textAlign: "center" }}>
              Lo sentimos no hay restaurantes disponibles de la categoría
              seleccionada
            </h2>
          </div>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCardDiscover
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))
        )}
      </section>
    </div>
  );
}

export default DiscoverView;