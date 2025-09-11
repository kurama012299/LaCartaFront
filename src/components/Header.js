import React from 'react';
import { Button } from 'antd';
import { RiRestaurantLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/home" style={{ textDecoration: 'none' }}>
      <div className="logo-container">
        <RiRestaurantLine className="iconRestaurant" />
        <h3 className="labelMenu">La Carta</h3>
      </div>
      </Link>
      <Link to="/discoverview" style={{ textDecoration: 'none' }}>
        <h4 className="labelHeader">Descubrir</h4>
      </Link>
      <div className="button-group">
        <Button type="primary" className="buttonHover">Iniciar sesión</Button>
        <Button type="primary" className="button">Registrarse</Button>
      </div>
    </div>
  );
};

export default Header;