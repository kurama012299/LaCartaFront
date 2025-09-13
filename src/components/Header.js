import React from 'react';
import { Button } from 'antd';
import { RiRestaurantLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      {/* LOGO - Coincide con .logo-container y .labelMenu */}
      <Link to="/home" style={{ textDecoration: 'none' }}>
        <div className="logo-container">
          <RiRestaurantLine className="iconRestaurant" />
          <h3 className="labelMenu">La Carta</h3>
        </div>
      </Link>

      {/* MENÚ DE ESCRITORIO - Ahora coincide con el CSS que espera .labelHeader dentro de un contenedor */}

      {/* 👇 ¡Aquí está el truco! Tu CSS tiene reglas para .labelHeader, pero no las aplica si no están en un contenedor tipo ".nav-desktop" */}
      {/* Pero como NO quieres cambiar el CSS, y tu CSS también aplica a cualquier .labelHeader, lo dejamos así — solo aseguramos que esté visible */}
      <div className="nav-desktop"> {/* ← Este div lo agregamos para que el CSS lo reconozca como grupo de enlaces (aunque no lo uses en CSS directamente, ayuda a la semántica) */}
        <Link to="/discoverview" style={{ textDecoration: 'none' }}>
          <h4 className="labelHeader">Descubrir</h4>
        </Link>
      </div>

      {/* BOTONES - Coinciden con .button-group, .button, .buttonHover */}
      <div className="button-group">
        <Button type="primary" className="buttonHover">Iniciar sesión</Button>
        <Button type="primary" className="button">Registrarse</Button>
      </div>
    </div>
  );
};

export default Header;