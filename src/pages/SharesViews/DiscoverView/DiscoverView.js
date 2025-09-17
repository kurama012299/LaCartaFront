import React from "react";
import "./DiscoverView.css";
import Header from "../../../components/Header";
import { Button ,Modal} from "antd";
import Icon from "../../../components/Icon";
import EspaghettiIcon from "../../../assets/icons/icon-espaghetti.png.png";
import Tacos from "../../../assets/icons/icon-tacos.png";
import Sushi from "../../../assets/icons/icon-sushi.png";
import RiceIcon from "../../../assets/icons/icon-arroz.png";  
import AmericanIcon from "../../../assets/icons/icon-hamburguesa.png"; 
import ChineseIcon from "../../../assets/icons/icon-dumpling.png";
import MeatIcon from "../../../assets/icons/icon-carne.png";
import RestaurantCardDiscover from "../../../components/RestaurantCardDiscover";
import { useFetch } from "../../../services/useFetch";
import { useState ,useEffect} from "react";
import NoRestaurantIcon from "../../../assets/icons/icon-no-comida.png";
import ApiErrorHandler from "../../../components/ApiErrorHandler";


const DiscoverView = () => {
    const info = () => {
  Modal.info({
    title: " No hay restaurantes encontrados",
    okButtonProps: {
      style: {
        backgroundColor:
          "rgb(255, 102, 0)",
        border: "none",
        color: "white",
        boxShadow: "0 2px 8px rgba(255, 102, 0, 0.2)",
      },
    },
    content: (
      <div>
        <h2 style={{ textAlign: "center"}}>
          Lo sentimos no hay restaurantes disponibles de la categoría
          seleccionada
        </h2>
      </div>
    ),
    icon: (
      <img
        src={NoRestaurantIcon}
        style={{ width: "24px", height: "24px" }}
      ></img>
    ),

    onOk() {},
  });
};


    const [selectedCategory, setSelectedCategory] = useState(null);
    
    const apiUrl = selectedCategory
  ? `http://localhost:8080/restaurants/restaurants-cousine-type?cousineType=${Number(selectedCategory)}`
  : "http://localhost:8080/restaurants";

  
  
   const cuisines = [
    { name: "Italiana", icon: EspaghettiIcon ,id: 4},
    { name: "Japonesa", icon: Sushi , id:1},
    { name: "Mexicana", icon: Tacos , id:8},
    { name: "Criolla", icon: MeatIcon , id:2},
    { name: "Americana", icon: AmericanIcon, id:5 },
    { name: "China", icon: ChineseIcon ,id:6},
    { name : "Koreana", icon: RiceIcon ,id: 3},
  ];

 
  const { data, loading, error,refetch } = useFetch(apiUrl);
  

  useEffect(() => {
  if (loading || error) return;

  if (data.length === 0 && selectedCategory !== null && data!=null) {
    info();
    setSelectedCategory(null);
  }
}, [data, selectedCategory, error]);


    

  

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
                onClick={() => setSelectedCategory(cuisine.id)}
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
        <ApiErrorHandler error={error} onRetry={refetch}>
          {loading ? (
            <p>Cargando...</p>
          ) : data?.length === 0 && selectedCategory !== null ? (
            <div className="BoxiconNoRestaurant">
              <img
                src={NoRestaurantIcon}
                style={{
                  width: "32px",
                  height: "32px",
                  alignContent: "center",
                }}
              />
              <h2 style={{ textAlign: "center" }}>
                Lo sentimos, no hay restaurantes disponibles de la categoría
                seleccionada
              </h2>
            </div>
          ) : (
            <>
              <p className="restaurants-subtitle">
                {data?.length} restaurantes encontrados
              </p>
              {data?.map((restaurant) => (
                <RestaurantCardDiscover
                  key={restaurant.id}
                  restaurant={restaurant}
                />
              ))}
            </>
          )}
        </ApiErrorHandler>
      </section>
    </div>
  );
}



export default DiscoverView;