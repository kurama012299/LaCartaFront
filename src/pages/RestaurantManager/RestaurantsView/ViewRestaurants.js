import './ViewRestaurants.css';
import Header from "../../../components/Header";
import RestaurantMexican from"../../../assets/imgs/restaurant-mexican.png";
import RestaurantAsian from"../../../assets/imgs/restaurant-japanese.png";
import {Button,Tag} from "antd"
import { LuLeaf } from "react-icons/lu";
import { TbToolsKitchen2 } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlinePlace } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { RiRestaurantLine } from "react-icons/ri";
import {PlusOutlined } from "@ant-design/icons";
import StatusSwitch from "../../../components/css/StatusSwitch"
import { message, Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { IoFishOutline } from "react-icons/io5";
import { GiBowlOfRice } from "react-icons/gi";
import { Link } from 'react-router-dom';
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



const ViewRestaurants =()=>{
    const { data, loading, error } = useFetch("http://localhost:8080/restaurants");
    const navigate=useNavigate();

  if (loading) return <div>Cargando restaurantes...</div>;
  if (error) return <div>Error al cargar: {error.message}</div>;
  if (!data || data.length === 0) return <div>No hay restaurantes disponibles.</div>;
  

  const handleEdit = (id) => {
    console.log("Editar restaurante con ID:", id);
    navigate('/restaurants');
  };

    return (
      <body className="bodyRestaurantsManager">
        <Header />
        <h1 className="labelRestaurants">Restaurantes</h1>
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
       <div>
          <section className='sectionnew'>
          <div>
            {data.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onEdit={handleEdit}
              />
            ))}
          </div>
          </section>
        </div>
      </body>
    );
}
export default ViewRestaurants;