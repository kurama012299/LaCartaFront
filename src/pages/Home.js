import React from 'react';
import './Home.css';
import { Button } from 'antd';
import { RiRestaurantLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { HiOutlineQrcode } from "react-icons/hi";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <Header />
        <h1 className="labelCenter">
          Menús Digitales para el Futuro de la Gastronomía
        </h1>
        <p className="labelSub">
          Descubre restaurantes increíbles y explora sus menús digitales. Para restaurantes: digitaliza tu carta gratis y actualízala en tiempo real
        </p>
        <div className="buttonGroup">
          <Button
            type="primary"
            icon={<RiRestaurantLine />}
            className="buttonRestaurant"
          >
            Explorar restaurantes
          </Button>
          <Link to="/viewrestaurants" style={{ textDecoration: "none" }}>
            <Button
              type="primary"
              icon={<FiUsers />}
              className="buttonToRestaurant"
            >
              Para restaurantes
            </Button>
          </Link>
        </div>
      </section>

      <section className="sectionMiddle">
        <h2 className="sectionTitle">¿Cómo funciona?</h2>

        <div className="bigBox">
          <div className="box">
            <HiOutlineQrcode className="iconBox" />
            <h3 className="boxTitle">Escanea el QR</h3>
            <p className="boxText">
              Simplemente escanea el código QR en tu mesa para acceder al menú digital del restaurante
            </p>
          </div>

          <div className="box">
            <RiRestaurantLine className="iconBox" />
            <h3 className="boxTitle">Explora el menú</h3>
            <p className="boxText">
              Navega por categorías, ve fotos de los platos y obtén información detallada de cada elemento
            </p>
          </div>

          <div className="box">
            <FiUsers className="iconBox" />
            <h3 className="boxTitle">Gestión fácil</h3>
            <p className="boxText">
              Los restaurantes pueden actualizar precios, platos y disponibilidad en tiempo real
            </p>
          </div>
        </div>

        <h3 className="sectionSubtitle">¿Tienes un restaurante?</h3>
        <p className="labelSub">
          Únete a nuestra plataforma de forma gratuita y digitaliza tu menú hoy mismo. Sin costos ocultos, sin complicaciones.
        </p>
        <Button type="primary" className="buttonStart">
          Comenzar gratis
        </Button>
      </section>
    </div>
  );
};

export default Home;