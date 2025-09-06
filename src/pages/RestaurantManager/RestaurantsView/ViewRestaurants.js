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

const confirm = e => {
  console.log(e);
  message.success('Restaurante eliminado');
};
const cancel = e => {
  console.log(e);
  message.error('Acción cancelada');
};



const ViewRestaurants =()=>{
    return (
        <body className="body">
            <Header />
            <h1>Restaurantes</h1>
            <Button icon={<RiRestaurantLine />} className="buttonNew" size="large" type="primary"> Nuevo Restaurante</Button>
            <div className="galery">
                <div className="boxPicture">
                    <img className="image" src={RestaurantMexican} alt="Restaurante mexicano" ></img>
                    <h2 className="labelNameRestaurant">El Rincón mexicano</h2>
                    <IoCallOutline className="iconCall" />
                    <h5 className="numberPhone">+53 54347890</h5>
                    <MdOutlinePlace className="iconUbi" />
                    <h5 className="ubication">La Habana,Vedado</h5>
                    <p className="paragraph">Recetas tradicionales, pasadas de generación en generación.
                        Preparadas con ingredientes auténticos, muchos de ellos importados directamente de México.
                        Cada plato es un homenaje a la cocina familiar: cálida, generosa y llena de sabor.
                        Porque en cada bocado, no solo comes… vives una tradición.</p>
                    <Tag icon={<LuLeaf />} className="tagFood" color='green'>vegetariano</Tag>
                    <Tag icon={<TbToolsKitchen2 />} className="tagFood2" color="volcano">artesanal</Tag>
                    <FaEdit className="iconEdit"></FaEdit>
                    <Popconfirm
                        title="Eliminar restaurante"
                        description="¿Estás seguro de eliminar este Restaurante?"
                        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    ><MdDeleteForever className="iconDelete"></MdDeleteForever>
                    </Popconfirm>
                    
                    <StatusSwitch></StatusSwitch>
                </div>
                <div className="boxPictureAsian">
                    <img className="imageAsian" src={RestaurantAsian} alt="Restaurante asiático" ></img>
                    <h2 className="labelNameRestaurant">Sushi Zen</h2>
                    <IoCallOutline className="iconCall" />
                    <h5 className="numberPhone">+53 54387890</h5>
                    <MdOutlinePlace className="iconUbi" />
                    <h5 className="ubication">La Habana,Marianao</h5>
                    <p className="paragraph">Sushi elaborado con técnica tradicional y productos de la más alta calidad.
                        Pescado fresco, arroz perfectamente sazonado y detalles que honran la cocina japonesa.
                        Cada plato es una experiencia de equilibrio, pureza y sabor.
                        Bienvenido al arte del auténtico sushi japonés.</p>
                    <Tag icon={<IoFishOutline/>} className="tagFoodSushi" color='green'>pescado fresco</Tag>
                    <Tag icon={<GiBowlOfRice />} className="tagFood2" color="volcano">auténtico</Tag>
                    <FaEdit className="iconEdit"></FaEdit>
                    <Popconfirm
                        title="Eliminar restaurante"
                        description="¿Estás seguro de eliminar este Restaurante?"
                        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    ><MdDeleteForever className="iconDelete"></MdDeleteForever>
                    </Popconfirm>
                    
                    <StatusSwitch></StatusSwitch>
                </div>
            </div>
        </body>
    );
}
export default ViewRestaurants;