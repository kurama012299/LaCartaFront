import React from 'react';
import './Home.css';
import { Button } from 'antd';
import { RiRestaurantLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { HiOutlineQrcode } from "react-icons/hi";
import {Link} from "react-router-dom";
import Header from "../components/Header";

const Home = ()=> {
    return (
      <body>
        <section className="body">
          <Header />
          <h1 className="labelCenter">
            Menús Digitales para el Futuro de la Gastronomía
          </h1>
          <p className="labelSub">
            {" "}
            Descubre restaurantes increíbles y explora sus menús digitales.Para
            restaurantes: digitaliza tu carta gratis y actualízala en tiempo
            real
          </p>
          <div className="divButtons">
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
          <h2
            style={{
              fontWeight: "700",
              marginTop: "60px",
              fontSize: "2rem",
              marginBottom: "30px",
            }}
          >
            ¿Cómo funciona?
          </h2>
          <div className="bigBox">
            <div className="box">
              <p
                style={{
                  fontWeight: "600",
                  position: "relative",
                  top: "80px",
                  fontSize: "large",
                }}
              >
                Escanea el QR
              </p>
              <HiOutlineQrcode className="iconBox"></HiOutlineQrcode>
              <p
                style={{
                  position: "relative",
                  left: "20px",
                  maxWidth: "300px",
                  color: "rgb(96, 96, 96)",
                }}
              >
                Simplemente escanea el código QR en tu mesa para acceder al menú
                digital del restaurante
              </p>
            </div>
            <div className="box">
              <p
                style={{
                  fontWeight: "600",
                  position: "relative",
                  top: "80px",
                  fontSize: "large",
                }}
              >
                Explora el menú
              </p>
              <RiRestaurantLine className="iconBox"></RiRestaurantLine>
              <p
                style={{
                  position: "relative",
                  left: "20px",
                  maxWidth: "300px",
                  color: "rgb(96, 96, 96)",
                }}
              >
                Navega por categorías,ve fotos de los platos y obtén información
                detallada de cada elemento
              </p>
            </div>
            <div className="box">
              <p
                style={{
                  fontWeight: "600",
                  position: "relative",
                  top: "80px",
                  fontSize: "large",
                }}
              >
                Gestion fácil
              </p>
              <FiUsers className="iconBox"></FiUsers>
              <p
                style={{
                  position: "relative",
                  left: "20px",
                  maxWidth: "300px",
                  color: "rgb(96, 96, 96)",
                }}
              >
                Los restaurantes pueden actualizar precios, platos y
                disponibilidad en tiempo real
              </p>
            </div>
          </div>
          <h3
            style={{
              fontWeight: "700",
              fontSize: "2rem",
              position: "relative",
              top: "150px",
              marginBottom: "20px",
            }}
          >
            ¿Tienes un restaurante?
          </h3>
          <p
            style={{ position: "relative", top: "150px" }}
            className="labelSub"
          >
            {" "}
            Únete a nuestra plataforma de forma gratuita y digitaliza tu menú
            hoy mismo. Sin costos ocultos, sin complicaciones.
          </p>
          <Button type="primary" className="buttonStart">
            Comenzar gratis
          </Button>
        </section>
      </body>
    );
}
export default Home;
