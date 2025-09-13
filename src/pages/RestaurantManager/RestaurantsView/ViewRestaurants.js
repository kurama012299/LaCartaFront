import React from 'react';
import './ViewRestaurants.css';
import Header from "../../../components/Header";
import { Button } from "antd";
import { RiRestaurantLine } from "react-icons/ri";
import { message, Popconfirm } from 'antd';
import { useFetch } from '../../../services/useFetch';
import RestaurantCard from '../../../components/RestaurantCard';
import { useNavigate } from 'react-router-dom';

const confirm = e => {
  console.log(e);
  message.success('Restaurante eliminado');
};

const cancel = e => {
  console.log(e);
  message.error('Acción cancelada');
};

const ViewRestaurants = () => {
  const { data, loading, error } = useFetch("http://localhost:8080/restaurants");
  const navigate = useNavigate();

  if (loading) return <div>Cargando restaurantes...</div>;
  if (error) return <div>Error al cargar: {error.message}</div>;
  if (!data || data.length === 0) return <div>No hay restaurantes disponibles.</div>;

  const handleEdit = (id) => {
    console.log("Editar restaurante con ID:", id);
    navigate('/restaurants');
  };

  return (
    <div className="bodyRestaurantsManager">
      <Header />
      <h1 className="labelRestaurants">Restaurantes</h1>

      {/* Botón "Nuevo Restaurante" — ahora responsive y no se pierde */}
      <div className="containerButton">
        <Button
          icon={<RiRestaurantLine />}
          className="buttonNew"
          size="large"
          type="primary"
        >
          Nuevo Restaurante
        </Button>
      </div>

      {/* Contenedor de tarjetas — ahora se expande correctamente */}
      <section className="sectionnew">
        {data.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onEdit={handleEdit}
          />
        ))}
      </section>
    </div>
  );
};

export default ViewRestaurants;